import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, role, otherRole, messageType, message, email } = body;

    // Validation
    const errors: string[] = [];

    if (!firstName?.trim()) errors.push('First name is required');
    if (!lastName?.trim()) errors.push('Last name is required');
    if (!phone?.trim()) errors.push('Phone number is required');
    if (!role?.trim()) errors.push('Role is required');
    if (role === 'Others' && !otherRole?.trim()) errors.push('Please specify your role');
    if (!messageType?.trim()) errors.push('Subject is required');
    if (!message?.trim()) errors.push('Message is required');
    
    // Email validation (if provided)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Invalid email format');
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or 'smtp.gmail.com'
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your app password
      },
    });

    // Prepare email content
    const finalRole = role === 'Others' ? otherRole : role;
    const htmlMessage = message.replace(/\n/g, '<br>');

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email || undefined,
      subject: `New ${messageType} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background: linear-gradient(135deg, #3A86FF 0%, #FF4ECD 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New ${messageType} Message</h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #3A86FF; padding-bottom: 10px;">Contact Information</h2>
            
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Role:</td>
                <td style="padding: 8px 0; color: #333;">${finalRole}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #333;">${messageType}</td>
              </tr>
            </table>
            
            <h2 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #FF4ECD; padding-bottom: 10px;">Message</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #3A86FF; color: #333; line-height: 1.6;">
              ${htmlMessage}
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px; text-align: center;">
              <p>This message was sent from your Chrysalis Portfolio contact form</p>
              <p>${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email to business
    await transporter.sendMail(mailOptions);

    // Send automated reply to user (if email provided)
    if (email) {
      const autoReplyOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Chrysalis Tech Solutions',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background: linear-gradient(135deg, #3A86FF 0%, #FF4ECD 100%); padding: 40px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">Chrysalis Tech Solutions</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Transforming Ideas into Digital Reality</p>
            </div>
            
            <div style="background-color: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #3A86FF; margin-bottom: 20px; font-size: 22px;">Thank You for Reaching Out!</h2>
              
              <p style="color: #333; line-height: 1.8; margin-bottom: 20px; font-size: 15px;">
                Dear <strong>${firstName} ${lastName}</strong>,
              </p>
              
              <p style="color: #333; line-height: 1.8; margin-bottom: 20px; font-size: 15px;">
                We appreciate you taking the time to contact us. Your message regarding "<strong>${messageType}</strong>" has been successfully received and is now in our queue.
              </p>
              
              <p style="color: #333; line-height: 1.8; margin-bottom: 30px; font-size: 15px;">
                Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24-48 hours during business days.
              </p>
              
              <div style="background: linear-gradient(135deg, rgba(58,134,255,0.1) 0%, rgba(255,78,205,0.1) 100%); padding: 25px; border-radius: 8px; border-left: 4px solid #3A86FF; margin-bottom: 30px;">
                <h3 style="color: #3A86FF; margin: 0 0 15px 0; font-size: 16px;">Need Immediate Assistance?</h3>
                <p style="color: #555; margin: 0; line-height: 1.6; font-size: 14px;">
                  Feel free to reach out to us through any of the following channels:
                </p>
              </div>
              
              <table style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px 0; color: #666; width: 50px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3A86FF 0%, #FF4ECD 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <span style="color: white; font-size: 20px;">📧</span>
                    </div>
                  </td>
                  <td style="padding: 12px 0; color: #333; vertical-align: top;">
                    <strong style="display: block; color: #3A86FF; margin-bottom: 5px;">Email</strong>
                    <a href="mailto:chrysalistechsolutions@gmail.com" style="color: #555; text-decoration: none;">chrysalistechsolutions@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #666; width: 50px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3A86FF 0%, #FF4ECD 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <span style="color: white; font-size: 20px;">📱</span>
                    </div>
                  </td>
                  <td style="padding: 12px 0; color: #333; vertical-align: top;">
                    <strong style="display: block; color: #3A86FF; margin-bottom: 5px;">Phone</strong>
                    <a href="tel:09104081839" style="color: #555; text-decoration: none;">0910 408 1839</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #666; width: 50px; vertical-align: top;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #3A86FF 0%, #FF4ECD 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                      <span style="color: white; font-size: 20px;">👥</span>
                    </div>
                  </td>
                  <td style="padding: 12px 0; color: #333; vertical-align: top;">
                    <strong style="display: block; color: #3A86FF; margin-bottom: 5px;">Facebook</strong>
                    <a href="https://www.facebook.com/profile.php?id=61586766646181" style="color: #555; text-decoration: none;">Chrysalis Tech Solutions</a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h4 style="color: #333; margin: 0 0 10px 0; font-size: 14px;">Your Message Summary:</h4>
                <p style="color: #666; margin: 0; font-size: 13px; line-height: 1.6;">
                  <strong>Subject:</strong> ${messageType}<br>
                  <strong>Submitted:</strong> ${new Date().toLocaleString()}
                </p>
              </div>
              
              <p style="color: #666; line-height: 1.8; margin-bottom: 10px; font-size: 14px;">
                Thank you for choosing Chrysalis Tech Solutions. We look forward to working with you!
              </p>
              
              <p style="color: #666; line-height: 1.8; margin: 0; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #3A86FF;">The Chrysalis Tech Solutions Team</strong>
              </p>
              
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 11px; text-align: center; line-height: 1.6;">
                <p style="margin: 5px 0;">This is an automated message. Please do not reply to this email.</p>
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Chrysalis Tech Solutions. All rights reserved.</p>
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(autoReplyOptions);
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
