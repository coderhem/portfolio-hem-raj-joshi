import React from 'react'
import socialLinksData from '../data/data.json'
type Links = {
 socialLink?: string
 socialIcon?: string
}
const currentYear = new Date().getFullYear(); // Get the current year


const Footer = ({ socialIcon, socialLink }: Links) => {
 return (
  <footer className='bg-black shadow-xl pt-16 pb-10 border-t border-white/10'>
   <div className="container">
    <div className="text-center mb-7">
     <h2 className="text-3xl font-bold bg-linear-to-l from-dark-orange from-30% to-white to-60% bg-clip-text text-transparent">
      Hem Raj Joshi
     </h2>
     <span className='text-lg'>Full Stack Developer</span>
    </div>
    {socialLinksData.footerSocialLinks?.length > 0 && (
     <div className="text-center">
      <ul className='flex flex-wrap justify-center gap-4'>
       {socialLinksData.footerSocialLinks.map((item, index) => (
        <li className='relative x-2 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 size-10 group hover:bg-primary hover:shadow-2xl hover:shadow-dark-orange transition-all duration-500 hover:scale-110' key={index}>
         <a href={item.socialLink} target='_blank' rel='noopener noreferrer' className='stretched-link text-white'><i className={`${item.socialIcon}`}></i></a>
        </li>
       )
       )}
      </ul>
     </div>
    )}
    <div className="pt-7 mt-7 lg:pt-10 lg:mt-14 relative before:absolute before:top-0 before:left-0 before:right-0 before:bg-linear-to-l before:from-black before:via-white/20 before:to-black before:h-0.5 text-center text-white/70 [&_p]:mb-1">
     <span className='text-base'>&copy; {currentYear}{' '} <span className="text-primary">Hem Raj Joshi</span>. All rights reserved.</span>
     <span className='text-base block'>Built with modern web technologies using Next.js.</span>
    </div>
   </div>
  </footer>
 )
}

export default Footer
