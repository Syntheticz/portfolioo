import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import cover from '../components/images/cover.png'



const Home: NextPage = () => {
  return (
      <>
        <div className='relative w-screen h-screen '>
          <div className='flex z-10'>
            <Navbar/>
          </div>
          <div className='bg-covers bg-cover flex flex-col sm:flex-row w-full h-auto sm:max-h-fit items-center'>
            <div className='z-10 w-full sm:w-1/2 h-screen flex items-center justify-center'>
                <div className='w-full flex flex-col items-center sm:items-start sm:w-2/3 h-auto'>
                    <h3 className='text-white text-xl font-semibold'>Hi I'm</h3>
                    <h1 className='text-white text-3xl -ml-1 my-[.5rem] sm:text-6xl lg:text-6xl font-semibold '>Philip Guiang</h1>
                    <h3 className='text-white text-xl font-semibold'>Full Stack Developer</h3>
                </div>
            </div>
            <div className='z-10 hidden sm:flex items-end justify-center max-w-md h-screen'>
                <img className='max-w-m' src={cover.src} alt="A very handsome man" />
            </div>
            <div className='z-0 top-12 bottom-0 absolute w-full h-full bg-cyan-600 opacity-20'></div>
          </div>
          
              <Footer/>
        </div>
      </>
    )
}

export default Home
