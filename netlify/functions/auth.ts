const nodemailer = require('nodemailer')

exports.handler = async ({event}: any) => {
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
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  }
}