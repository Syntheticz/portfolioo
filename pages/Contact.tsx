import React, { ChangeEventHandler } from 'react'
import Navbar from '../components/Navbar'
import Strip from '../components/Strip'
import Images from '../components/images/images'
import Footer from '../components/Footer'
import Head from 'next/head'

import { useState } from 'react'




interface Form {
  name : string;
  email : string;
  message: string;
}

export default function Contact() {
    
  const [form, setForm] = useState({name: '', email: '', message: ''});

  const handleOnClick = () => {
    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setForm(() => {return {...form,[event.target.name] : event.target.value,}})
  }

  

  return (
    <>
        <Head>
          <title>Phil Guiang | Contact</title>
        </Head>
        <div className='flex'>
            <Navbar/>
        </div>
        <div className='w-screen flex items-center justify-center bg-cyan-400 bg-opacity-25 bg-blend-overlay bg-covers bg-cover min-h-[120vh]'>
          <div className='w-[90%] relative pb-[60px] sm:p-0 rounded-xl sm:max-w-[600px] flex flex-col items-center h-[75%] sm:min-h-[600px] bg-cyan-800'>
              <div className='w-fullflex items-center justify-center'>
                <h1 className='text-white font-bold text-[1.75rem] sm:text-5xl my-4'>Got any suggestions?</h1>
              </div>
              
              <div className='w-full h-full'>
                <div className='flex px-4 justify-center flex-col my-4'>
                  <label className='text-white font-bold text-2xl sm:text-4xl mb-4' htmlFor="name">Name: </label>
                  <input onChange={handleChange} className='h-8 sm:h-12 text-xl sm:text-2xl p-2 rounded-md ' name='name' type={'text'}/>
                </div>

                <div className='flex px-4 justify-center flex-col my-4'>
                  <label className='text-white font-bold text-2xl sm:text-4xl mb-4' htmlFor="name">Email: </label>
                  <input onChange={handleChange} className='h-8 sm:h-12 text-xl sm:text-2xl p-2 rounded-md ' name='email' type={'email'}/>
                </div>

                <div className='flex px-4 justify-center flex-col my-4'>
                  <label className='text-white font-bold text-2xl sm:text-4xl mb-4' htmlFor="message">Message: </label>
                  <textarea onChange={handleChange} className='h-16 sm:h-24 text-xl sm:text-2xl p-2 rounded-md ' name='message'/>
                </div>
               
                <button type='submit' onClick={handleOnClick} className='absolute right-4 sm:mt-4 bg-cyan-500 p-2 rounded-lg text-white font-bold text-2xl sm:text-3xl hover:bg-cyan-900 active:bg-white active:text-cyan-500'>Submit</button>
              </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
