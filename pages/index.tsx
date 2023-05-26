import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Headers from '@/components/Headers';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = ()=> {
  return (
    // the snap here is the parent
    <div className='bg-[rgb(20,20,20)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Shiming's Portfolio</title>
      </Head>

      {/* Components */}
      <Headers/>


      {/* Hero */}
      {/* the snap here is the child */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects */}
      {/* fix this */}
      <section id='projects' className='snap-center'>
        <Projects/>
      </section>

      {/* <section id='relevantClass' className='snap-center'>
        <RelevantClasses/>
      </section> */}


      {/* Contact me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
    </div>
  )
}
export default Home;