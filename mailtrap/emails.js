import { emailTemplate } from "./email-template.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

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

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "a66159a8-2b3e-4a9d-b124-0d47f4916c74",
      template_variables: {
        company_info_name: "Auth Company",
        name,
      },
    });

    console.log("Welcome email sent successfully:", response);
  } catch (error) {
    const errorMessage = `Error sending welcome email: ${error}`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};
