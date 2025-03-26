'use client'
import React, { useRef } from 'react'
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/hero.png'
import cylinderImage from '@/assets/era.png'
import noodleImage from '@/assets/half.png'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef, 
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={heroRef} className='pt-8 pb-20 md:pt-20 md:pb-10 bg-[#dee5fc] overflow-x-clip'>
      <div className="container">
        <div className="md:flex items-center">  
        <div className="md:w-[478px]">
          <div className="tag">Version 3.0 is here</div>
          <h1 className='text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Astro leadership pathway program</h1>
          <p className='text-xl text-[#010d3e] tracking-tight mt-6'>Celebrating your accomplishments can help you feel proud, motivated, and empowered. It can also help you build a positive feedback loop and create lasting memories. </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'>
              <span>Learn More</span>
              <ArrowIcon className="h-5 w-5" />
              </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img 
          src={cogImage.src} 
          alt="cogImage" 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
          animate={{
            translateY: [-30, 30],
          }} 
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 3,
            ease: 'easeInOut',
          }}

          />
          <motion.img 
          src={cylinderImage.src} 
          alt="cylinderImage" 
          className='hidden lg:h-[200px] lg:w-[200px] md:block -top-8 -left-32 md:absolute' 
          style={{
            translateY: translateY,
          }}
          />
          <motion.img 
          alt="noodleImage" 
          src={noodleImage.src}
          style={{
            rotate: 30,
            translateY: translateY,
          }} 
          width={220} 
          className='absolute top-[524px] left-[448px] hidden lg:block rotate-[30deg]'  />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero