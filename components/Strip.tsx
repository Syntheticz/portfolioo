import Image from 'next/image'
import React from 'react'
import test from '../components/images/tailwind.png'

interface Strip {
    image : string;
    name: string;
}

export default function Strip(props : Strip) {
  return (
    <div className='sm:w-[300px] p-4 h-[200px] justify-center flex items-center'>
       <div className='bg-white w-32 sm:w-1/2 h-2/3 p-2 rounded-[100%]'>
            <div className='w-full h-full p-2'>
                    <Image src={props.image} objectFit='contain' layout='intrinsic' width={120} height={100}/>
            </div>
       </div>
       <div className='flex items-center w-1/2 h-full ml-4'>
            <h1 className='text-white font-bold text-2xl'>{props.name}</h1>
       </div>
    </div>
  )
}
