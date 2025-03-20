import React from 'react'
import { useState,useEffect } from 'react'
function BasicForm() {
   const [formData,setFormData] = useState({
      name:'',email:'',password:''
    })
    const [errors,setErrors] = useState({})
    const handleChange = (e) =>
    {
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>
    {
      let newErrors = {};
      e.preventDefault()
      if(formData.name.trim()=='')
      {
        newErrors.namecon="name is required"
      }
      if(formData.email.trim()=='')
      {
        newErrors.emailcon="email is required"
      }
      if(formData.password.trim()=='')
      {
        newErrors.passwordcon="password is required"
      }
      if(formData.password.trim().length<6)
      {
        newErrors.passwordLen = "min password size is 6"
      }
      
      setErrors(newErrors)
    }
    return (
      <div className=' min-h-screen bg-amber-200 flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-5 rounded-3xl bg-white shadow-blue-300 flex flex-col gap-4 ' >
          <input type="text" placeholder='enter name' onChange={handleChange} className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'/>
          <p className='text-red-500 '>{errors.namecon}</p>
          <input type="email" placeholder='email' onChange={handleChange} className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'/>
          <p className='text-red-500 '>{errors.emailcon}</p>
          <input type="password" placeholder='password' onChange={handleChange} className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'/>
          <p className='text-red-500 '>{errors.passwordcon}</p>
          <p className='text-red-500 '>{errors.passwordLen}</p>
          <button className='p-3 rounded-2xl text-2xl bg-black text-white width 20'>submit</button>
        </form>
      </div>
    )
}

export default BasicForm
