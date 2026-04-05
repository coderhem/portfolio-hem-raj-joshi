'use client';
import React, { useState } from 'react'

type ErrorsType = {
 name?: string
 email?: string
 phone?: string
}

const Form = () => {


 const [errors, setErrors] = useState<ErrorsType>({})
 const [success, setSuccess] = useState('')
 const [loading, setLoading] = useState(false)

 const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  message: ''
 })

 // handleChange add
 const handleChange = (e: any) => {
  setFormData({
   ...formData,
   [e.target.id]: e.target.value
  })

  // error remove while typing
  setErrors({
   ...errors,
   [e.target.id]: ''
  })
 }

 // validation add
 const validate = () => {
  let newErrors: ErrorsType = {}

  // Name validation
  if (!formData.name) {
   newErrors.name = 'Name is required'
  } else if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) {
   newErrors.name = 'Name must be at least 3 letters and only alphabets'
  }
  // Email validation
  if (!formData.email) {
   newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
   newErrors.email = 'Invalid email format'
  }

  // Phone validation (10 digit only)
  if (!formData.phone) {
   newErrors.phone = 'Phone is required'
  } else if (!/^\d{10}$/.test(formData.phone)) {
   newErrors.phone = 'Phone must be number and 10 digits'
  }
  return newErrors
 }

 // handleSubmit add
 const handleSubmit = async (e: any) => {
  e.preventDefault()

  const validationErrors = validate()
  if (Object.keys(validationErrors).length > 0) {
   setErrors(validationErrors)
   return
  }
  setLoading(true)
  setSuccess('')
  const res = await fetch('/.netlify/functions/auth', {
   method: 'POST',
   body: JSON.stringify(formData),
  })
  const data = await res.json()
  if (res.ok) {
   setSuccess(`Your message has been sent successfully! I’ll get back to you shortly. For urgent matters, please call me at 9865900739.`)
   setFormData({ name: '', email: '', phone: '', message: '' })
  }

  setLoading(false)
 }

 return (
  <>
   <div className="get-in-touch">
    {/* success message */}
    {success && (
     <div className="flex items-center gap-2 bg-green-800 text-white border border-green-300 px-4 py-5 rounded-md mt-4 mb-6 text-center">
      <span className="font-medium">{success}</span>
     </div>
    )}
    <form onSubmit={handleSubmit} noValidate>
     <div className="form-group">
      <label htmlFor="name" className='label'>Name <span className='text-red'>*</span></label>
      <input type="text" value={formData.name} id="name" placeholder='Enter Your Name' onChange={handleChange} className='form-input' />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
     </div>

     <div className="form-group">
      <label htmlFor="email" className='label'>Email <span className='text-red'>*</span></label>
      <input type="email" value={formData.email} id="email" placeholder='Enter Your Email' onChange={handleChange} className='form-input' />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
     </div>

     <div className="form-group">
      <label htmlFor="phone" className='label'>Phone <span className='text-red'>*</span></label>
      <input type="text" value={formData.phone} id="phone" placeholder='Enter Your Phone' onChange={handleChange} className='form-input' />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
     </div>

     <div className="form-group">
      <label htmlFor="message" className='label'>Message</label>
      <textarea id="message" placeholder='Tell us about your project...' onChange={handleChange} className='form-input' />
     </div>
     <button className='btn btn-primary w-full' type="submit" disabled={loading}>
      {loading ? 'Sending...' : 'Submit'}
     </button>
    </form>
   </div>
  </>
 )
}

export default Form;