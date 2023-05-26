import React from 'react'
import {motion} from "framer-motion"
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-400 text-2xl'>Experience</h3>

        {/* add this to className below once I have more experience to add */}
        {/* w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory */}
        <div className=''>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default WorkExperience