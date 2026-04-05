const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  const data = JSON.parse(event.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"${data.name}" <${data.email}>`,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Message',
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p style="margin: 0 0 8px; background-color: rgba(0, 128, 0, 0.1); padding: 15px;"><b style="color: #2E86C1;">Name:</b> ${data.name}</p>
    <p style="margin: 0 0 8px; background-color: rgba(0, 128, 0, 0.1); padding: 15px;"><b style="color: #2E86C1;">Email:</b> <a href="mailto:${data.email}" style="color: #2E86C1; text-decoration: none;">${data.email}</a></p>
    <p style="margin: 0 0 8px; background-color: rgba(0, 128, 0, 0.1); padding: 15px;"><b style="color: #2E86C1;">Phone:</b> ${data.phone}</p>
    <p style="margin: 0 0 8px; background-color: rgba(0, 128, 0, 0.1); padding: 15px;"><b style="color: #2E86C1;">Message:</b> <span style="background: #f4f4f4; padding: 4px 6px; border-radius: 4px;">${data.message || 'No message provided'}</span></p>
  </div>
    `,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}