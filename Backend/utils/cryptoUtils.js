import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const ALGORITHM = 'aes-256-cbc';
const IV = Buffer.alloc(16, 0); // Can be randomized and stored for better security

const getKeyFromEnv = () => {
  const key = process.env.MASTER_SECRET;
  if (!key) throw new Error('MASTER_SECRET is not set in .env');
  return Buffer.from(key, 'hex').slice(0, 32); // AES-256 key length
};

// Generate a unique encryption key for user
export const generateEncryptionKey = () => {
  return crypto.randomBytes(32).toString('hex'); // 256-bit key
};

// Encrypt the user’s encryption key using MASTER_SECRET
export const encryptWithMasterKey = (plainTextKey) => {
  const cipher = crypto.createCipheriv(ALGORITHM, getKeyFromEnv(), IV);
  let encrypted = cipher.update(plainTextKey, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Decrypt the encryption key
export const decryptWithMasterKey = (encryptedKey) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, getKeyFromEnv(), IV);
  let decrypted = decipher.update(encryptedKey, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};


export const generateDownloadToken = (userId, nomineeEmail) => {
  return jwt.sign({ userId, nomineeEmail }, process.env.JWT_SECRET, { expiresIn: '7d' });
};


export const verifyDownloadToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const decryptFileBuffer = (buffer, key) => {
  try {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), IV);
    const decrypted = Buffer.concat([decipher.update(buffer), decipher.final()]);
    return decrypted;
  } catch (err) {
    console.error('❌ Decryption error:', err.message);
    throw new Error('Decryption failed: Possibly wrong key or corrupted file buffer');
  }
};
