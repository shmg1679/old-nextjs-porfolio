import React from 'react'
import {motion} from "framer-motion"
import profilePicture from '../images/profilePic-bg-white.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-400 text-2xl'>About</h3>
        
          <motion.img 
            initial={{
              x:-200,
              opacity:0,
            }}
            transition={{
              duration:1.5
            }}
            whileInView={{
              opacity:1,
              x:0,
            }}
            viewport={{
              once:true,
            }}
            src={profilePicture.src} alt=''
            className='-mh-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
          />

          <div className='space-y-10 px-0 md:px-10'>
            <div className="flex space-x-4">
              <a href="https://docs.google.com/document/d/1uniNLeVowC7nTjSUWEVeW06y0jDsQetvWwq5YYTELYY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="w-40 h-16 border-3 border-blue-500 rounded-full transition-all duration-300 cursor-pointer bg-gray-700 text-lg font-semibold text-white font-montserrat hover:bg-blue-500 hover:text-white hover:text-xl">
                  Resume
                </button>
              </a>

              <a href="https://drive.google.com/file/d/1dn08vdOLDyAIf0PxTqsFzdgZWJhBe0WP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="w-40 h-16 border-3 border-blue-500 rounded-full transition-all duration-300 cursor-pointer bg-gray-700 text-lg font-semibold text-white font-montserrat hover:bg-blue-500 hover:text-white hover:text-xl">
                  Degree
                </button>
              </a>

              {/* <a href="https://drive.google.com/file/d/1H8CTJhfYa3Cgg1-hioV3drUQLs9KOTyW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="w-40 h-16 border-3 border-blue-500 rounded-full transition-all duration-300 cursor-pointer bg-gray-800 text-lg font-semibold text-white font-montserrat hover:bg-blue-500 hover:text-white hover:text-xl">
                  CodePath's cert
                </button>
              </a> */}
            </div>

            <h3 className='text-4xl font-semibold'>
              <span className='underline decoration-blue-400'>Here're some background about me</span></h3>
            <p className='text-base'>
              Hello! My name is Shiming Huang. I graduated from John Jay College with a Bachelor's in Computer Science and Information Security. Initially I pursued a degree in science and my major is computer science because I had always been fascinated with coding as a child and later had an interest in cyber security which is why I transferred over to John Jay which offered these courses. <br /><br />
              Later I was given an opportunity to join the CUNY Tech Talent Pipeline (TTP) program which offered a one month long boot camp in web development and later helped me get an internship in that field as a software engineer. After that, I have shifted my focus towards software development as I found creating software to be quite fulfilling. But that does not mean my interest in cyber security has decrease as I'm always open to learning more about both fields.
            </p>
          </div>
    </motion.div>
  )
}