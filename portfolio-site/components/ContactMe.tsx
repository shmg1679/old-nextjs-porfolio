import React from 'react'
import {PhoneIcon, EnvelopeIcon} from "@heroicons/react/24/solid"

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-400 text-2xl">
        Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Here are some ways to contact me. <br/>
                <span className='decoration-[#4fcaff] underline'>Let's get in touch!</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#4fcaff] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>1 (917) 326 9611</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#4fcaff] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>shimingh1479@gmail.com</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default ContactMe