"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import headerLogo from 'header-logo.webp'

const Header = ({ setHeaderHeight }: any) => {

 const [active, setActive] = useState(false);

 useEffect(() => {
  if (active) {
   document.body.classList.add("active")
  }
  else {
   document.body.classList.remove("active")
  }
 }, [active])

 const headerRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
  if (headerRef.current) {
   setHeaderHeight(headerRef.current.offsetHeight);
  }
 }, [setHeaderHeight]);

 return (
  <header className='site-header py-5 bg-black/70' ref={headerRef}>
   <div className="container">
    <div className="flex justify-between items-center">
     <a href='#home' className='font-berkshire text-xl md:text-2xl lg:text-3xl text-white'>HEM RAJ <span className='text-primary'>JOSHI</span></a>
     <nav className='navbar flex gap-6 items-center'>
      <button className="hamBurger" onClick={() => setActive(prev => !prev)}>
       <span></span>
       <span></span>
       <span></span>
      </button>
      <ul className='header-links link-style'>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#skills">Skils</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className='mobile-header-links link-style'>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#skills">Skils</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className='contact-btn'>
       <li><a href="tel:+977-9865900739" className='btn btn-primary icon'><span className='max-sm:hidden'>Hire ME</span></a></li>
      </ul>
      {/* Hamburger */}
     </nav>
    </div>
   </div>
  </header>
 )
}

export default Header
