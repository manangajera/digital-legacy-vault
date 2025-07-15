import crypto from 'crypto';
import { decryptWithMasterKey } from './cryptoUtils.js';

const ALGORITHM = 'aes-256-cbc';
const IV = Buffer.alloc(16, 0); // Can also randomize and store per file

export const encryptBuffer = (buffer, encryptedUserKey) => {
  const key = Buffer.from(decryptWithMasterKey(encryptedUserKey), 'hex');
  const cipher = crypto.createCipheriv(ALGORITHM, key, IV);
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return encrypted;
};

export const decryptBuffer = (encryptedBuffer, encryptedUserKey) => {
  const key = Buffer.from(decryptWithMasterKey(encryptedUserKey), 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, key, IV);
  const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
  return decrypted;
};