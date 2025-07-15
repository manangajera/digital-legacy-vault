// utils/emailService.js
import nodemailer from 'nodemailer';
import { generateDownloadToken } from './cryptoUtils.js';
import dotenv from 'dotenv';
dotenv.config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export const sendTestEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,           // e.g. yourname@gmail.com
      pass: process.env.EMAIL_APP_PASSWORD,       // Gmail app password
    },
  });

  const info = await transporter.sendMail({
    from: `"AfterMe" <${process.env.EMAIL_USERNAME}>`,
    to: 'pikachoofj@gmail.com', // replace with your test email
    subject: 'Test Email from Nodemailer',
    html: '<h2>Hello from Nodemailer 👋</h2><p>This is a test email from your Node.js app.</p>',
  });

  console.log('✅ Email sent:', info.messageId);
};
// sendTestEmail()

// 🔐 1. Send Verification Email
export const sendVerificationEmail = async (user, token) => {
  const link = `${process.env.VERIFY_BASE_URL}/${token}`;
  const html = `
    <p>Hello ${user.fullName},</p>
    <p>Click the button below to verify your email address:</p>
    <a href="${link}" style="padding:10px 20px;background:#007BFF;color:white;text-decoration:none;border-radius:5px;">Verify Email</a>
    <p>If you didn’t request this, just ignore this email.</p>
  `;

  await transporter.sendMail({
    from: `"AfterMe" <${process.env.EMAIL_USERNAME}>`,
    to: user.email,
    subject: 'Verify your email',
    html,
  });
};

// 🟢 2. Send Alive Check Email
export const sendAliveEmail = async (user, phase) => {
  const messages = {
    initial: 'Are you still alive?',
    reminder: 'Reminder: Please confirm your activity.',
    final: 'Final warning! Please respond or your data may be shared.',
  };

  const link = `${process.env.VERIFY_BASE_URL}/alive/${user._id}`;
  const html = `
    <p>${messages[phase]}</p>
    <a href="${link}" 
       style="padding:10px 20px;background:#007BFF;color:white;text-decoration:none;border-radius:5px;">
       I am Alive
    </a>
  `;

  await transporter.sendMail({
    from: `"AfterMe" <${process.env.EMAIL_USERNAME}>`,
    to: user.email,
    subject: 'Alive Check',
    html,
  });
};

// 📨 3. Notify Nominees
export const notifyNominees = async (user, nominees) => {
  for (const nominee of nominees) {
    const token = generateDownloadToken(user._id.toString(), nominee.email);
    const downloadLink = `${process.env.CLIENT_BASE_URL_DOWNLOAD}/${user._id}/${token}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Dear ${nominee.name},</h2>
        <p>This is an official notification from <strong>AfterMe</strong>.</p>
        <p><strong>${user.fullName}</strong> has not responded to our periodic alive checks and is now marked as <em>unresponsive</em>.</p>
        <p>As their designated nominee, you are authorized to access their secure digital legacy.</p>
        <p>
          <a href="${downloadLink}" 
            style="display: inline-block; padding: 12px 20px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            🔐 Download Files
          </a>
        </p>
        <p>If the button above doesn’t work, copy and paste this link into your browser:</p>
        <p style="word-break: break-all;"><a href="${downloadLink}">${downloadLink}</a></p>
        <hr/>
        <p style="font-size: 12px; color: #555;">If you were not expecting this email, please ignore it or contact AfterMe support.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"AfterMe" <${process.env.EMAIL_USERNAME}>`,
      to: nominee.email,
      subject: 'AfterMe – Secure Data Transfer',
      html,
    });

    console.log(`📧 Email sent to nominee: ${nominee.email}`);
  }
};
