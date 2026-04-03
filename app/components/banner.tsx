"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
import Image from 'next/image';
import heroImage from '../../public/banner-featured-image.png'


const Banner = ({ headerHeight }: { headerHeight: number }) => {
  return (
    <section className='py-12 md:py-16 lg:py-24 bg-linear-to-r from-primary/5 to-primary/0 relative before:absolute before:left-0 before:top-1/2 before:size-40 before:bg-primary/40 before:-z-1 before:blur-3xl' style={{ marginTop: headerHeight }} id='home'>
      <div className="container">
        <div className="flex flex-wrap gap-y-8 -mx-5">
          {/* Left Column */}
          <div className="w-full lg:w-7/12 px-5">
            {/* Eyebrow Text */}
            <span className='inline-block mb-4 bg-primary/20 border border-white p-3 rounded-4xl animate-bounce relative z-1 before:absolute before:inset-0 before:bg-primary/40 before:animate-pulse before:z-[-1] before:rounded-4xl'>Available for work</span>
            {/* Name */}
            <h1 className='text-shadow-light-orange'>Hem Raj <span className='text-primary'>Joshi</span></h1>
            {/* Animate Text */}
            <h2 className='h4 font-berkshire max-sm:text-lg'>
              Hii👋 I am{" "}
              <TypeAnimation
                className='text-primary'
                sequence={[
                  'Frontend Developer',
                  1000,
                  1000,
                  'MERN Stack Developer',
                  1000,
                  'WordPress Developer',
                  1000,
                  'Java Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            {/* Description Text */}
            <div className="mt-6 max-w-2xl text-lg text-white/80">
              <p>Passionate <span className='text-dark-orange font-berkshire'>Full-Stack</span> developer focused on building fast, scalable, and visually stunning web applications using modern technologies.</p>
            </div>
            {/* CTA Wrapper */}
            <div className="my-7 flex flex-wrap gap-5">
              <a href="#" className='btn btn-white'>Explore Projects</a>
              <a href="tel:+977-9865900739" className='btn btn-outline rounded-none max-sm:before:left-5 max-sm:before:translate-x-0'>Hire ME</a>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full max-lg:max-w-125 mx-auto lg:w-5/12 px-5 rounded-full bg-linear-to-l from-primary to-black [&_img]:w-full [&_img]:rounded-full [&_img]:p-1 [&_img]:border-primary relative z-1 before:absolute before:inset-0 before:bg-primary/60 before:blur-3xl before:-z-1 float">
            {/* Banner Image */}
            <Image
              src={heroImage}
              width={200}
              height={200}
              alt='Hero Featured Image'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
