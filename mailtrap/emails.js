import { emailTemplate } from './email-template.js';
import { mailtrapClient, sender } from './mailtrap.config.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: emailTemplate.VERIFICATION_EMAIL(verificationToken),
      category: "Email Verification",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    const errorMessage = `Error sending verification email: ${error}`;

    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
