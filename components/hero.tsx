"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './customButton'

const Hero = () => {
    const handleScroll = () => {}

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero_title'>
                Find, book, or rent a car -- quickly and easily!
            </h1>

            <p className='hero_subtitle'>
                Streamline your car rental experience with our effortless booking process.
            </p>

            <CustomButton 
            title="Explore cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10 p-4"
            handleClick={handleScroll}/>
        </div>
        <div className="hero_image-container">
            <div className="hero_image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />
            </div>
                <div className="hero_image-overlay" />
        </div>
    </div>
  )
}

export default Hero;