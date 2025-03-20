import React from 'react'
import { useState } from 'react'

function Controlled() {
    const [formData,setFormData] = useState({
        name:'',email:'',password:''
    })
    
    const handleChange = (e) =>
    {
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        console.log("name : "+formData.name)
        console.log("email : "+formData.email)
        console.log("pwd : "+formData.password)
        setFormData({
            name:'',email:'',password:''
        })
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='enter name' value={formData.name} name='name' onChange={handleChange}/>
      <input type='email' placeholder='enter email' value={formData.email} name='email' onChange={handleChange } />
      <input type='password' placeholder='enter pwd' value={formData.password} name='password' onChange={handleChange} />
      <button >submit</button>
    </form>
  )
}

export default Controlled
