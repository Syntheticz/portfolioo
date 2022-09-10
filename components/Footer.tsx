import Image from 'next/image';
import React from 'react'
import icons from '../components/images/icons';
import FooterIcons from './FooterIcons';

export default function Footer() {
  return (
    <div className='w-full relative sm:h-14 flex flex-col sm:flex-row  items-center justify-center bg-cyan-900 bottom-0'>
       <FooterIcons image={icons.fb} name="Phil Guiang" link='https://www.facebook.com/Syntheticzz/'/>
       <FooterIcons image={icons.twitter} name="@happyyphill" link='https://twitter.com/happyyphill'/>
       <FooterIcons image={icons.github} name="Syntheticz" link='https://github.com/Syntheticz'/>
       <FooterIcons image={icons.instagram} name="@happyyphil" link='https://www.instagram.com/happyyphil/'/>
       <FooterIcons image={icons.ln} name="Jhon Philip Guiang" link='https://www.linkedin.com/in/jhon-philip-guiang-490526244/'/>
    </div>
  )
}
