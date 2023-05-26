import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
// nextjs way to load images is a lot faster than just using the img tag
// for loading images from a website, you'd need to whitelist the domain name in next.config.js file
import Image from 'next/image'
import profilePicture from '../images/profilePic-bg-white.jpg'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text, count ]= useTypewriter({
        words: [
            "Hi! My Name's Shiming Huang.", 
            "I Graduated From John Jay College With A Bachelor's Degree In Science.", 
            "My Major Is Computer Science And Information Security"],
        loop: true,
        delaySpeed: 4000,
        typeSpeed: 50,
        deleteSpeed: 20,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        {/* need to replace the image */}
        {/* <div className='relative h-30 w-32 mx-auto rounded-full overflow-hidden object-cover'>
            <Image src={profilePicture} alt="profilePicture"/>
        </div> */}
        <h1 className="text-4xl">Welcome!</h1>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-400 tracking-[15px]'>
                {/* Software Engineer */}
            </h2>
            <h1 className='text-5xl lg:text-2xl font-semibold px-10'>
                {/* insert this in span to change specifically the text of this to something else: style={{ color: 'white', fontFamily: 'monospace', fontSize: 15 }} */}
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#4fcaff'/>
            </h1>

            <div className='pt-5'>
                {/* heroButton css is in global.css */}
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>           
                
            </div>
        </div>
        
        
    </div>
  )
}