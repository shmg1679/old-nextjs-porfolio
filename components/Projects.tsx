import React, { useState } from 'react'
import Image from 'next/image'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import foodtalk from '../images/foodtalk.jpg'
import weatherapp from '../images/weatherapp.jpg'

type Props = {}

export default function Projects({}: Props) {
    const projects = [
        {
            name: 1,
            img: weatherapp,
            description:"Simple weather app, this will be a filler until I replace it another project I'm working on",
            link: "https://github.com/shmg1679/WeatherAppPractice", 
        },
        {
            name: 2,
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            description:"PROJECT 2", 
        },
        {
            name: 3,
            img: foodtalk,
            description:"Collaborative group project during TTP winter 2022 web development boot camp cohort using Django where we created a site that showcases different food and recipes.", 
            link: "https://github.com/shmg1679/food-talk",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const length = projects.length

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    if(!Array.isArray(projects) || projects.length <= 0){
        return null;
    }

  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly z-0">
        <h3 className="absolute top-20 uppercase tracking-[10px] text-gray-400 text-2xl">
        Projects
        </h3>

        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-400 text-sm">
        Here are some projects I've done or was part of.
        </h3>

        <div className="max-w-[1200px] h-[1100px] w-full relative flex items-center justify-center mt-10 z-10">
        <AiOutlineArrowLeft
            className="absolute inset-y-1/2 left-0 text-5xl text-[#4fcaff] z-10 cursor-pointer select-none"
            onClick={prevSlide}
        />
        <AiOutlineArrowRight
            className="absolute inset-y-1/2 right-0 text-5xl text-[#4fcaff] z-10 cursor-pointer select-none"
            onClick={nextSlide}
        />
        {projects.map((prjt, index) => (
            <div
            className={`${
                index === currentSlide ? 'duration-1000 opacity-100' : 'ease-in duration-300 opacity-0'
            }`}
            key={index}
            >
            <a
                className="z-1 block relative"
                href={prjt.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                {index === currentSlide && (
                    <>
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-white opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                        className="cursor-pointer select-none transform hover:scale-105 transition-transform duration-300"
                        src={prjt.img}
                        width={700}
                        height={100}
                        alt="projects"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                        width={1200}
                        height={40}
                        alt="GitHub Logo"
                        />
                    </div>
                    </>
                )}
                </a>


            {/* {index === currentSlide && (
                <p className="py-10 translate-[20px] text-gray-400 text-2xl bg-slate-800">
                {prjt.description}
                </p>
            )} */}
            </div>
        ))}
        </div>

        <div className="max-w-[1200px] h-[50px] w-full relative flex items-center justify-center mb-40">
        {projects.map((prjt, index) => (
            <div
            className={`${index === currentSlide ? 'duration-1000 opacity-100' : 'ease-in duration-300 opacity-0'}`}
            key={index}
            >
            {index === currentSlide && (
                <p className="py-10 text-gray-400 text-2xl">{prjt.description}</p>
            )}
            </div>
        ))}
        </div>
    </div>
    );

}