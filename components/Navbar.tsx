import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="sticky z-20 flex items-center w-screen sm:w-full bg-cyan-700 h-12">
        <Link href={'/'}><a><h1 className='hover:text-cyan-900 transition ease-in-out text-lg font-bold font-Montserrat text-white ml-4 mr-auto'>Leviticus</h1></a></Link>
        <div  className='h-full items-center flex ml-auto'>
        <Link href={'/'}><a><h3 className='mr-4 py-2.5 px-2 text-lg font-semibold text-white hover:bg-cyan-200 transition ease-in-out hover:text-cyan-700 opacity-0 hidden sm:block sm:opacity-100'>Home</h3></a></Link>
        <Link href={'/About'}><a><h3 className='mr-4 py-2.5 px-2 text-lg font-semibold text-white hover:bg-cyan-200 transition ease-in-out hover:text-cyan-700 opacity-0 hidden sm:block sm:opacity-100'>About</h3></a></Link>
        <Link href={'/contact'}><a><h3 className='mr-4 py-2.5 px-2 text-lg font-semibold text-white hover:bg-cyan-200 transition ease-in-out hover:text-cyan-700 opacity-0 hidden sm:block sm:opacity-100'>Contact</h3></a></Link>
        <Link href={'/blog'}><a><h3 className='mr-4 py-2.5 px-2 text-lg font-semibold text-white hover:bg-cyan-200 transition ease-in-out hover:text-cyan-700 opacity-0 hidden sm:block sm:opacity-100'>Blog</h3></a></Link>
        <div className='group py-1.5 px-4 text-3xl font-semibold text-white hover:bg-cyan-200 transition-all duration-300 ease-in-out hover:text-cyan-700 block sm:hidden cursor-pointer'>
          <button>≡</button>
          <div className='absolute right-0 mt-[6px] bg-slate-100 hidden group-hover:flex group-hover:flex-col group-focus-within:flex group-focus-within:flex-col'>
            <Link href={'/'}><a><h3 className=' text-cyan-700 border-b-2 px-16 py-2 hover:text-white transition-all'>Home</h3></a></Link>
            <Link href={'/About'}><a><h3 className='text-cyan-700 border-b-2 px-16 py-2 hover:text-white transition-all'>About</h3></a></Link>
            <Link href={'/contact'}><a><h3 className='text-cyan-700 border-b-2 px-16 py-2 hover:text-white transition-all'>Contact</h3></a></Link>
            <Link href={'/blog'}><a><h3 className='text-cyan-700 border-b-2 px-16 py-2 hover:text-white transition-all'>Blog</h3></a></Link>
          </div>
        </div>
        </div>
        
    </div>
  )
}
