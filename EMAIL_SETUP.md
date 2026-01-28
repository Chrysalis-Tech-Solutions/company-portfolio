# Email Configuration Guide

## Setup Instructions

### 1. Environment Variables
The `.env.local` file has been created with placeholder values. You need to replace them with your actual email credentials.

**For Gmail:**

1. **Enable 2-Factor Authentication** on your Google account
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password (no spaces)

3. **Update `.env.local`:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   ```

**For Other Email Providers:**
- You may need to modify the transporter configuration in `/app/api/send-email/route.ts`
- For custom SMTP:
  ```javascript
  const transporter = nodemailer.createTransport({
    host: 'smtp.yourdomain.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  ```

### 2. Restart Development Server
After updating `.env.local`, restart your Next.js development server:
```bash
npm run dev
```

### 3. Testing
1. Navigate to the Contact page or use the Footer form
2. Fill in all required fields
3. Submit the form
4. Check your email inbox for the message

## Features Implemented

### Contact Page Form
- ✅ First Name validation
- ✅ Last Name validation
- ✅ Phone Number validation
- ✅ Email validation (optional field, validated format)
- ✅ Role dropdown validation
- ✅ Custom "Other Role" field validation
- ✅ Subject/Message Type selection
- ✅ Message content validation
- ✅ Loading state during submission
- ✅ Success/Error message display
- ✅ Form reset after successful submission

### Footer Form
- ✅ Email validation (required)
- ✅ Subject dropdown
- ✅ Message validation
- ✅ Loading state
- ✅ Success/Error feedback
- ✅ Form reset after submission

### Email Template
- Professional HTML email design
- Gradient header matching brand colors
- Organized contact information table
- Formatted message content
- Timestamp and source tracking

## Validation Rules

1. **Required Fields (Contact Page):**
   - First Name
   - Last Name
   - Phone Number
   - Role (with "Other" specification if selected)
   - Subject
   - Message

2. **Required Fields (Footer):**
   - Email
   - Message

3. **Format Validations:**
   - Email: Must be valid format (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
   - All text fields: Cannot be empty or whitespace-only

## Security Notes

- ✅ `.env.local` is gitignored (credentials not committed)
- ✅ Server-side validation in API route
- ✅ Client-side validation for better UX
- ✅ Error messages don't expose sensitive information
- ⚠️ Rate limiting recommended for production
- ⚠️ Consider adding CAPTCHA for spam prevention

## Troubleshooting

### "Failed to send email"
1. Check `.env.local` credentials are correct
2. Verify 2FA and App Password setup (Gmail)
3. Check server console for detailed error logs
4. Ensure port 587 (SMTP) is not blocked by firewall

### Validation Errors
- Ensure all required fields are filled
- Check email format is valid
- Verify message is not empty

### Email Not Received
1. Check spam/junk folder
2. Verify `EMAIL_USER` in `.env.local` is correct
3. Check email provider's sending limits
4. Review server console logs for errors

## Production Deployment

Before deploying to production:

1. Add environment variables to your hosting platform (Vercel, Netlify, etc.)
2. Consider implementing rate limiting
3. Add CAPTCHA or honeypot fields
4. Set up email monitoring/logging
5. Configure proper error tracking (e.g., Sentry)
