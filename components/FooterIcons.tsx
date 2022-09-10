import Link from 'next/link';
import React from 'react'

interface Props {
    image: string;
    name: string;
    link: string;
}

export default function FooterIcons(props : Props) {
  return (
    <div className='w-[250px] my-4 ml-4 justify-center flex items-center h-full'>
    <div className=' w-[40px]'>
      <img src={props.image} alt='fb'/>
    </div>
    <div className='w-full flex items-center ml-4 h-full'>
      <Link href={props.link}><a><h1 className='text-white font-bold'>{props.name}</h1></a></Link>
    </div>
  </div>
  )
}
