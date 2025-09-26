export const emailTemplate = {
  VERIFICATION_EMAIL: (verificationCode) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Verify Your Email</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p>Hello,</p>
        <p>Thank you for signing up! Your verification code is:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">${verificationCode}</span>
        </div>
        <p>Enter this code on the verification page to complete your registration.</p>
        <p>This code will expire in 15 minutes for security reasons.</p>
        <p>If you didn't create an account with us, please ignore this email.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </body>
    </html>
  `,

  PASSWORD_RESET_SUCCESS: () => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset Successful</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p>Hello,</p>
        <p>We're writing to confirm that your password has been successfully reset.</p>
        <div style="text-align: center; margin: 30px 0;">
          <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
            ✓
          </div>
        </div>
        <p>If you did not initiate this password reset, please contact our support team immediately.</p>
        <p>For security reasons, we recommend that you:</p>
        <ul>
          <li>Use a strong, unique password</li>
          <li>Enable two-factor authentication if available</li>
          <li>Avoid using the same password across multiple sites</li>
        </ul>
        <p>Thank you for helping us keep your account secure.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </body>
    </html>
  `,

  PASSWORD_RESET_REQUEST: (resetURL) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Password Reset</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <p>Hello,</p>
        <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
        <p>To reset your password, click the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
        </div>
        <p>This link will expire in 1 hour for security reasons.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </body>
    </html>
  `,

  WELCOME_EMAIL: (companyName, name) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to ${companyName}</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">${companyName}</h1>
    </div>

    <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center;">
      <img src="cid:authentication" alt="${companyName} Logo" style="margin-bottom: 20px; width: 150px; height: auto; border-radius: 10px;" />

      <h2>Welcome, ${name}!</h2>
      <p>Thanks for choosing ${companyName}! We are happy to see you on board.</p>

      <p>To get started, do this next step:</p>
      <a href="#" style="display: inline-block; background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;">Next Step</a>

      <div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0;">
        <div>
          <img src="cid:forms" alt="Dto Form Builder Tutorial" style="width: 100px; height: auto; border-radius: 5px;" />
          <p>Dto Form Builder Tutorial</p>
        </div>
        <div>
          <img src="cid:financial" alt="Financial App Clone" style="width: 100px; height: auto; border-radius: 5px;" />
          <p>Financial App Clone</p>
        </div>
      </div>

      <p><a href="#" style="color: #888; font-size: 0.8em; text-decoration: underline;">Unsubscribe</a></p>
    </div>
  </body>
  </html>
  `,
};
