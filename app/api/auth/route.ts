import { NextResponse } from 'next/server'
import { transporter } from '../email/mail'
// import { validateForm } from '../email'

export async function POST(req: Request) {
  const data = await req.json()

  // ✅ Validation
  // const error = validateForm(data)
  // if (error) {
  //  return NextResponse.json({ error }, { status: 400 })
  // }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Portfolio Form Request',
      html: `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2E86C1; margin-bottom: 20px;">Portfolio Form Message</h2>
    <p style="margin: 0 0 8px; background-color: #E0FFE0; padding: 20px;"><b style="color: #2E86C1;">Name:</b> ${data.name}</p>
    <p style="margin: 0 0 8px; background-color: #E0FFE0; padding: 20px;"><b style="color: #2E86C1;">Email:</b> <a href="mailto:${data.email}" style="color: #2E86C1; text-decoration: none;">${data.email}</a></p>
    <p style="margin: 0 0 8px; background-color: #E0FFE0; padding: 20px;"><b style="color: #2E86C1;">Phone:</b> ${data.phone}</p>
    <p style="margin: 0 0 8px; background-color: #E0FFE0; padding: 20px;"><b style="color: #2E86C1;">Message:</b> <span style="background: #f4f4f4; padding: 4px 6px; border-radius: 4px;">${data.message || 'No message provided'}</span></p>
  </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Email failed' }, { status: 500 })
  }
}