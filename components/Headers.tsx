import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

export default function Headers({}: Props) {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
            
            {/* Social icons */}
            <SocialIcon url='https://www.linkedin.com/in/shiming-huang-98b474221/ ' fgColor='#4fcaff' bgColor='transparent' target="_blank"/>
            <SocialIcon url='https://github.com/shmg1679' fgColor='#4fcaff' bgColor='transparent' target="_blank"/>
        </motion.div>

        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center text-color-gray-300 cursor-pointer'>
                
                <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='#4fcaff'
                bgColor='transparent'
                onClick={handleScrollToContact}
                />
                
                <Link href="#contact">
                    <p className='uppercase hidden md:inline-flex text-sm text-[#4fcaff]'>Get In Touch</p>
                </Link>
            
        </motion.div>
    </header>
  )
}