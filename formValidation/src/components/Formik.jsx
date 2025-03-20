import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
function FormikComp() {
    return (
        <div className=' min-h-screen bg-amber-200 flex justify-center items-center'>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={yup.object().shape(
                    {
                        name: yup.string()
                          .min(2, 'Too Short!')
                          .max(50, 'Too Long!')
                          .required('enter the name'),
                        password: yup.string()
                          .min(2, 'Too Short!')
                          .max(50, 'Too Long!')
                          .required('password is required'),
                        email: yup.string().email('Invalid email').required('Required'),
                      }
    )}
                onSubmit={(val) => console.log(val)} >
                {
                    (props) => {
                        return (
                            <>
                                <form onSubmit={props.handleSubmit}
                                    className='p-5 rounded-3xl bg-white shadow-blue-300 flex flex-col gap-4 '>
                                    <input type="text"
                                        placeholder='enter name'
                                        name='name'
                                        value={props.values.name}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'
                                    />
                                    <p className='text-red-500 '>{props.errors.name}</p>
                                    <input type="email"
                                        placeholder='enter email'
                                        name='email'
                                        value={props.values.email}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'
                                    />
                                    <p className='text-red-500 '>{props.errors.email}</p>
                                    <input type="password"
                                        placeholder='enter pwd'
                                        name='password'
                                        value={props.values.password}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        className=' h-10 w-100 border border-black rounded-2xl focus:border-blue-300'
                                    />
                                    <p className='text-red-500 '>{props.errors.password}</p>
                                    <button>submit</button>
                                </form>
                            </>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Formik
