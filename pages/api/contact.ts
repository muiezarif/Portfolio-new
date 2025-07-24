
import type { NextApiRequest, NextApiResponse } from 'next'

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type ResponseData = {
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message }: ContactData = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      message: 'All fields are required',
      error: 'Missing required fields'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Invalid email format',
      error: 'Invalid email'
    });
  }

  try {
    // Here you would typically integrate with an email service like:
    // - SendGrid
    // - Nodemailer
    // - AWS SES
    // - Resend
    
    // For now, we'll just log the contact form data
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // In a real implementation, you would send an email to muiezarifwork1@gmail.com
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'muiezarifwork1@gmail.com',
      from: 'noreply@muiezarif.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    res.status(200).json({ 
      message: 'Message received successfully! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      message: 'Failed to send message',
      error: 'Internal server error'
    });
  }
}
