import React from 'react'
import Navbar from '../components/Navbar'
import { Parallax } from 'react-parallax'
import Footer from '../components/Footer'
import cover from '../components/images/bgcovered.jpg';
import dp from '../components/images/dp.jpg';
import Images from '../components/images/images'
import Strip from '../components/Strip';
import Head from 'next/head';





const Container = () => (
  <Parallax blur={5} bgImage={cover.src} bgImageStyle={{objectFit: 'cover'}} bgImageAlt="Background Image" strength={300}>
      <div className='relative flex items-center justify-center w-screen h-[1000px]'>
          <div className='absolute z-0 w-screen h-full bg-cyan-500 opacity-25'></div>
          <p className='text-white z-10 text-4xl sm:text-6xl font-semibold'>Philip Guiang</p>
      </div>
  </Parallax>
);



export default function About() {
    
  return (
    <>
        <Head>
          <title>Phil Guiang | about</title>
        </Head>
        <div className='flex'>
            <Navbar/>
        </div>
            <Container/>
        <div className='bg-cyan-700 flex flex-col items-center sm:flex-row w-screen h-auto'>
          <div className='flex justify-center w-screen mt-8 sm:m-4 sm:w-1/2 '>
            <img className='w-[80%] shadow-lg rounded-[100%]' src={dp.src} alt="pogi" />
          </div>
          <div className='w-screen h-full'>
                <h1 className='text-white font-bold text-6xl mx-[4rem] mt-8 sm:mt-[12rem]'>About Me...</h1>
                <p className='text-white text-xl my-[4rem] mx-[4rem]'>&emsp;&emsp;&emsp; Hello, my name is Philip, and I am now enrolled in the Technological University of the Philippines. I am now pursuing a Bachelor of Science degree in computer science. I've always been fascinated by new and ancient technologies, as well as how they function and are designed. When I was in junior high, I participated in various computer-related events, which inspired me to pursue a career in this industry.<br/><br />&emsp;&emsp;&emsp;I had a lot of individuals in this sector that I looked up to, and they taught me a lot, not just about technology but also about life in general. Being good at what I do and striving for greatness every day keeps me going, with a little help from coffee. We only have to believe that we can do anything because God gives us the ability to do so. </p>
          </div>
          <div className='w-full h-[40px] block sm:hidden'></div>
        </div>
        <div className='w-screen h-auto flex flex-col sm:flex-row-reverse bg-slate-400'>
        </div>
        <div className='w-screen flex flex-col sm:flex-row'>
          <div className='bg-cyan-600 w-screen sm:w-1/2 flex flex-col items-center sm:max-w-lg'>
           <h1 className='text-white mt-4 font-bold text-xl sm:text-3xl'>Language/Framework Handled</h1>
            <div className='w-full mt-8 sm:ml-8'>
              <Strip image={Images.js} name='Javascript' />
             <Strip image={Images.react} name='React' />
              <Strip image={Images.next} name='Next JS' />
              <Strip image={Images.tailwind} name='Tailwind CSS' />
              <Strip image={Images.java} name='Java' />
              <Strip image={Images.cs} name='C#' />
           </div>
         </div>
         <div className='w-full bg-cyan-800 flex flex-col items-center '>
              <h1 className='text-white mb-[5rem] font-bold mt-8 text-6xl'>SKILLS</h1>
              <div>
              <div className='flex flex-col sm:flex-row items-center'>
                <h1 className='text-white font-bold text-3xl ml-1 sm:ml-[30px]'>Soft Skills</h1>
                <div className=' ml-4 sm:ml-8 sm:border-l-2 p-4'>
                  <h3 className='text-white font-bold text-2xl my-2'>• Creativity</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Critical Thinking</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Dependability</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Effective Communication</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Adaptability</h3>
                </div> 
              </div>

              <div className='flex flex-col sm:flex-row mt-8 items-center'>
                <h1 className='text-white font-bold text-3xl ml-4'>Hard Skills</h1>
                <div className='ml-8 sm:border-l-2 p-4'>
                  <h3 className='text-white font-bold text-2xl my-2'>• Web Development</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Frontend Frameworks (React, Semantic Ui)</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Database Management (Mongo DB, MySql)</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• Backend Development (Next JS)</h3>
                  <h3 className='text-white font-bold text-2xl my-2'>• After Effects</h3>
                </div> 
              </div>

              </div>

         </div>
        </div>
        <Footer/>
    </>
  )
}
