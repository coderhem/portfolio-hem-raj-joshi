"use client";
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import headerLogo from 'header-logo.webp';
import navItems from '../data/data.json';
const Header = ({ setHeaderHeight }: any) => {

  const [active, setActive] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeightLocal] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // 1. If clicked on any link → close
      if (target.closest("a")) {
        setActive(false);
        return;
      }

      // 2. If clicked outside → close
      if (
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

useLayoutEffect(() => {
  if (headerRef.current) {
    setHeaderHeightLocal(headerRef.current.offsetHeight);
  }
}, []);

  useEffect(() => {
    document.body.classList.toggle("active", active);
  }, [active]);

  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: `-${height}px 0px -90% 0px`, // 🔥 dynamic
        }
      );

      navItems.headerLinks.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

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
              {navItems.headerLinks.map((item) => (
                <li
                  key={item.id}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}

            </ul>
            <ul className='mobile-header-links link-style h-lvh pt-5' style={{ top: `${headerHeight}px` }}>
              <ul className="header-links link-style flex gap-6">

                {navItems.headerLinks.map((item) => (
                  <li
                    key={item.id}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}

              </ul>
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
