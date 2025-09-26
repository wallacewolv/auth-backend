import path from 'path';
import { fileURLToPath } from 'url';

import { emailTemplate } from './email-template.js';
import { sender, transporter } from './nodemailer.config.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Verify your email",
      html: emailTemplate.VERIFICATION_EMAIL(verificationToken),
    });

    console.log("Email sent successfully:", response.messageId);
  } catch (error) {
    const errorMessage = `Error sending verification email: ${error}`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Welcome to Auth Company 🎉",
      html: emailTemplate.WELCOME_EMAIL("Auth Company", name),
      attachments: [
        {
          filename: "authentication.svg",
          path: path.join(__dirname, "images", "authentication.svg"),
          cid: "authentication",
        },
        {
          filename: "forms.svg",
          path: path.join(__dirname, "images", "forms.svg"),
          cid: "forms",
        },
        {
          filename: "financial.svg",
          path: path.join(__dirname, "images", "financial.svg"),
          cid: "financial",
        },
      ],
    });

    console.log("Welcome email sent successfully:", response.messageId);
  } catch (error) {
    const errorMessage = `Error sending welcome email: ${error}`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Reset your password",
      html: emailTemplate.PASSWORD_RESET_REQUEST(resetURL),
    });

    console.log("Password reset email sent successfully:", response.messageId);
  } catch (error) {
    const errorMessage = `Error sending password reset email: ${error}`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: "Password Reset Successful",
      html: emailTemplate.PASSWORD_RESET_SUCCESS(),
    });

    console.log(
      "Password reset success email sent successfully:",
      response.messageId
    );
  } catch (error) {
    const errorMessage = `Error sending password reset success email: ${error}`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
