# 🔐 Digital Legacy Vault

A secure platform where users can store sensitive documents (like property papers, bank details, passwords, etc.) and designate nominees to receive access in case of their prolonged inactivity or death.

---

## 🚀 Features

- ✅ **User Authentication**
  - Register, Login, Logout, Email Verification
  - Secure password hashing using `bcrypt`
  - JWT-based token authentication
- 📁 **File Upload & Encryption**
  - Files encrypted with a unique per-user encryption key
  - Securely uploaded to Cloudinary
  - Metadata stored in MongoDB
- 👥 **Nominee Management**
  - Add, update, delete, and view nominees
  - Nominee may or may not be a registered user
- 💀 **After-Death Detection**
  - Alive status check system using scheduled CRON jobs
  - Sends reminders at 90, 120, and 150 days
  - At 170 days of inactivity, nominee is notified with download access
- 🔒 **Secure Download**
  - Files are downloaded, decrypted on-the-fly
  - Only accessible to authorized users or nominees
- 📊 **Rate Limiting**
  - Protects authentication routes from abuse
- 🛡️ **Token Blacklisting**
  - Tokens are blacklisted on logout for added security

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Cloud Storage**: Cloudinary
- **Security**: Bcrypt, JWT, Encrypted file buffers
- **Utilities**: dotenv, cookie-parser, node-cron
- **Logging**: Custom logger (e.g., winston)

---


## 📁 Folder Structure

- `/backend` - Complete backend source code
- `/frontend` - Placeholder folder (not maintained)

> ⚠️ This project focuses only on backend functionality. The frontend is not implemented.

## 📁 Project Structure

```
├── controllers/
├── models/
├── middlewares/
├── routes/
├── utils/
├── db/
├── server.js
└── .env
```

---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/manangajera/digital-legacy-vault.git
cd digital-legacy-vault
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password_or_app_token
MASTER_KEY=your_32_byte_encryption_key_base64
```

> ⚠️ `MASTER_KEY` should be a 32-byte base64 string for AES encryption.

4. **Run the server**

```bash
npm start
```

---

## 🧪 API Endpoints (Examples)

### 👤 User
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/user/register` | Register a new user |
| POST   | `/api/user/login`    | Login with email & password |
| GET    | `/api/user/profile`  | Get user profile |
| POST   | `/api/user/logout`   | Logout user |
| GET    | `/api/user/verify/:token` | Email verification |
| POST   | `/api/user/verify/alive/:id` | Confirm user is alive |

### 👥 Nominees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/user/nominees` | Add a nominee |
| PUT    | `/api/user/nominees/:index` | Update a nominee |
| DELETE | `/api/user/nominees/:index` | Delete a nominee |
| GET    | `/api/user/nominees` | List all nominees |

### 📁 Files
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/file/upload` | Upload an encrypted file |
| GET    | `/api/file/download/:id` | Download and decrypt file |
| GET    | `/api/file/allFiles` | List user’s files |

---

## 📅 Scheduled Tasks

- **Alive Check Cron**
  - Runs daily at **1 AM**
  - Phases:
    - 90 days: Initial email
    - 120 days: Reminder
    - 150 days: Final warning
    - 170 days: Data shared with nominees

---

## 🔧 Enhancements You Can Buildo

- 🔒 2FA for extra login security
- 📲 SMS alert integration
- 📜 Audit logs for downloads and nominee actions
- 📈 Admin dashboard for monitoring

---


## 🙌 Credits

Developed with ❤️ by Manan Gajera (https://github.com/manangajera)