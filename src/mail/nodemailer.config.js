// nodemailer.config.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,   // ex: smtp.gmail.com
  port: process.env.SMTP_PORT,   // ex: 465 (SSL) ou 587 (TLS)
  secure: process.env.SMTP_SECURE === "true", // true = 465, false = 587
  auth: {
    user: process.env.SMTP_USER, // seu usuário/email
    pass: process.env.SMTP_PASS, // senha ou app password
  },
});

export const sender = {
  email: process.env.SMTP_FROM_EMAIL || "noreply@seusistema.com",
  name: process.env.SMTP_FROM_NAME || "Seu Sistema",
};
