import React from 'react'
import Navbar from '../components/Navbar'
import { Parallax } from 'react-parallax'
import Footer from '../components/Footer'
import cover from '../components/images/bgcovered.jpg';
import Image from 'next/image';
import dp from '../components/images/dp.jpg';
import test from '../components/images/react.png';

const Container = () => (
  <Parallax blur={5} bgImage={cover.src} bgImageStyle={{objectFit: 'cover'}} bgImageAlt="Background Image" strength={300}>
      <div className='relative flex items-center justify-center w-screen h-[1000px]'>
          <div className='absolute z-0 w-screen h-full bg-cyan-500 opacity-25'></div>
          <p className='text-white z-10 text-4xl sm:text-6xl font-semibold'>Philip Guiang</p>
      </div>
  </Parallax>
);

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../components/images', false, /\.(png|jpe?g|svg)$/));



export default function About() {
    
  return (
    <>
        <div className='flex'>
            <Navbar/>
        </div>
            <Container/>
        <div className='bg-cyan-700 flex flex-col sm:flex-row w-screen h-auto'>
          <div className='w-cover sm:w-1/3 h-full items-center flex flex-col'>
            <div className='w-[80vw] sm:w-[90%] mt-[8rem]'>
                <Image src={dp.src} layout='responsive' width={100} height={100} className='rounded-[100%]' />
            </div>
          </div>
          <div className='w-full h-full '>
                <h1 className='text-white font-bold text-6xl mx-[4rem] mt-[12rem]'>About Me...</h1>
                <p className='text-white text-xl my-[4rem] mx-[4rem]'>&emsp;&emsp;&emsp; Hello, my name is Philip, and I am now enrolled in the Technological University of the Philippines. I am now pursuing a Bachelor of Science degree in computer science. I've always been fascinated by new and ancient technologies, as well as how they function and are designed. When I was in junior high, I participated in various computer-related events, which inspired me to pursue a career in this industry.<br/><br />&emsp;&emsp;&emsp;I had a lot of individuals in this sector that I looked up to, and they taught me a lot, not just about technology but also about life in general. Being good at what I do and striving for greatness every day keeps me going, with a little help from coffee. We only have to believe that we can do anything because God gives us the ability to do so. </p>
          </div>
        </div>
        <div className='w-screen h-auto flex flex-col sm:flex-row-reverse bg-slate-400'>
         <div className='w-full sm:w-1/2 h-full bg-cyan-800'>
         <h1 className='text-white font-bold text-2xl lg:text-4xl line-clamp-2 lg:p-4 p-8'>Handled Languages/Frameworks</h1>

         <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className='w-full h-full rounded-[100%]' src={images["javascript.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>JavaScript</h1>
        </div>

        <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className=' h-2/3 object-cover ' src={images["react.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>React</h1>
        </div>

        <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className='h-1/2 object-cover' src={images["next.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>Next JS</h1>
        </div>

        <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className='w-full h-full rounded-[100%]' src={images["tailwind.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>Tailwind CSS</h1>
        </div>

        <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className='w-[90%] rounded-[100%]' src={images["csharp.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>C#</h1>
        </div>

        <div className='w-[90%] mt-4 flex items-center mx-4 h-[60px]'>
            <div className='flex bg-white items-center rounded-[100%] justify-center w-[60px] h-full'>
              <img className='w-[45%]' src={images["java.png"].default.src} alt="React" /> 
            </div>
            <h1 className='mx-4 font-bold text-2xl text-white'>Java</h1>
        </div>
        <div className='w-full h-[40px]'></div>
         </div>
         <div className='w-full flex flex-col items-center bg-cyan-600'>
            <h1 className='text-white text-5xl font-bold mt-4'>SKILLS</h1>
            <div className='w-full'>
              <h3 className='font-bold text-white text-3xl mx-4 my-4'>Soft Skills</h3>
              <div>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Creativity</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Teamwork</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Critical thinking</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Willingness to learn</h4>
              </div>
            </div>
            <div className='w-full'>
              <h3 className='font-bold text-white text-3xl mx-4 my-4'>Hard Skills</h3>
              <div>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Profficient in React JS</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• UI Frameworks</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Back-end Development</h4>
                <h4 className='font-bold text-white text-xl mx-8 my-2'>• Adobe After Effects</h4>
              </div>
            </div>
            <div className='w-full h-[40px]'></div>
         </div>
        </div>
        <Footer/>
    </>
  )
}
