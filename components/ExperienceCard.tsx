import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}
// add this it article when there is more experience
// hover:opacity-100 opacity-40 transition-opacity

export default function ExperienceCard({}: Props) {
  return ( 
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#29292929] p-10 duration-100 overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        viewport={{
          once:true,
        }}
      >
        <Image className='h-32 w-32 xl:h-[200px] xl:w-[200px] object-cover object-center' src={require('../images/vngle.jpg')} alt=''/>
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Vngle</h4>
        <p className='font-bold text-2xl mt-1'>Software Engineer Intern</p>
        <div className='flex space-x-2 my-2'>
          <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='' className='h-10 w-10' title='React Native' width={10} height={10}/>
          <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' alt='' className='h-10 w-10' title='AWS' width={10} height={10}/>
          <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='' className='h-10 w-10' title='JavaScript' width={10} height={10}/>
        </div>
        <p className='uppercase py-5 text-gray-200'>June 2022 - August 2022</p>
        <ul className='list-disc space-y-5 ml-5 text-lg'>
          <li>Built two versions of a camera mobile app used for allowing reporters to capture news media content that will then be uploaded to a cms from scratch. Utilize React Native to create a cross platform iOS/Android mobile app that is able to capture image/video media content.</li>
          <li>Collaborated with other team members for the initial version of the app that would utilize Strapi as a CMS for media and data storage.</li>
          <li>Built the second version by myself for the app to be able to send data to AWS for storage utilizing S3 to store media content and DynamoDB for storing other data entry such as time, location and other descriptive information of the media captured. Created and managed/configured AWS amplify and AWS Cognito user and identity pools used for the app to connect them together for the mobile app. Managed and configured AWS IAM role policies for the mobile app  user permissions.</li>
        </ul>
      </div>
    </article>
  )
}