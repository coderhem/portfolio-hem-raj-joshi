import React from 'react'
import BlockTitle from './blockTitle'
const About = () => {
 const techStacks = [
  { techIcon: 'icon-html', tech: 'HTML', },
  { techIcon: 'icon-css', tech: 'CSS', },
  { techIcon: 'icon-react', tech: 'React', },
  { techIcon: 'icon-next', tech: 'Next JS', },
  { techIcon: 'icon-java', tech: 'Java', },
  { techIcon: 'icon-tailwind', tech: 'Tailwind CSS', },
 ];
 return (

  <div className="container">
   <BlockTitle
    customClass='[&_span]:text-primary [&_span]:font-berkshire mb-10'
    title='About Me'
    description={`I am a <span>Full Stack</span> developer focused on building modern, scalable, and user-friendly web applications. I am a fast learner and always eager to learn new technologies.`}
   />
   <div className="flex flex-wrap gap-y-10 -mx-5">
    <div className="w-full lg:w-1/2 px-5 h-auto">
     <div className="h-full bg-black px-4 sm:px-7 py-5 transition-all duration-300 rounded-2xl border border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      <h3 className='mb-4'>My Journey</h3>
      <p> Hii, everyone my name is <span className='font-berkshire text-primary'>Hem Raj Joshi</span>, I hold a <span className='font-berkshire text-primary'>Bachelor's degree in Computer Applications (BCA)</span>, and I have been working in this field for two years. I joined a company as an intern two years ago while still in college, and I have been working there since. During this time, I have gained a solid understanding of front-end development. I have worked extensively with front-end tools like <span className='font-berkshire text-primary'>React, Gatsby, and Next.js</span>, and for <span className='font-berkshire text-primary'>CSS</span>, I have used <span className='font-berkshire text-primary'>Tailwind CSS</span> ans <span className='font-berkshire text-primary'>SCSS</span> as well.
      </p>
      <p>I am now eager to expand into back-end development, as I aspire to become a <span className='font-berkshire text-primary'>Full-Stack Developer</span>. I have also built personal projects using Next.js and Java, and I have strong expertise in <span className='font-berkshire text-primary'>WordPress</span>, allowing me to transform static sites into dynamic. I also learned <span className='font-berkshire text-primary'>Java</span> through a three-month training course. I am passionate about learning back-end development—whatever the language may be—and I am a fast learner, fully committed to becoming a full-stack developer by mastering both sides of the stack.</p>
      <div className="flex flex-wrap gap-y-4 -mx-2 mt-10">
       {techStacks.map((item, index) => (
        <div className="w-full sm:w-1/2 px-2" key={index}>
         <div className="bg-primary/10 border border-primary/70 rounded-lg p-4 hover:scale-[102%] transition-all duration-300 hover:shadow hover:shadow-dark-orange/20 hover:bg-primary/15 group">
          <div className="flex items-center gap-4 xl:gap-5">
           <i className={`${item.techIcon} group-hover:-rotate-12 transition-all duration-300 bg-primary size-12 rounded-xl text-white flex justify-center items-center text-2xl border border-primary/40 shadow-md shadow-dark-orange/70`}></i>
           <h4 className='h5 flex-1'>{item.tech}</h4>
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
    <div className="w-full lg:w-1/2 px-5 h-auto">
     <div className="h-full bg-black px-4 sm:px-7 py-5 transition-all duration-300 rounded-2xl border border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      <div className="flex gap-3 items-center mb-8">
       <i className="icon-badge text-2xl text-primary"></i>
       <h4 className='h3'>Expereicne</h4>
      </div>
      {/* Experience Card */}
      <div className="ml-3 border-l-4  mb-7 border-primary/70 px-5 py-1 relative before:absolute before:-left-3 before:rounded-full before:top-0 before:size-5 before:bg-primary 
       before:shadow-lg before:shadow-primary">
       <span className='text-primary block '>2024 - 2026</span>
       <h5 className='h4'>Frontend Developer</h5>
       <a href='https://www.smartsites.com/' target='_blank'>SmartSites Nepal</a>
      </div>
      {/* Experience Card */}
      <div className="ml-3 mb-7 border-l-4 border-primary/70 px-5 py-1 relative before:absolute before:-left-3 before:rounded-full before:top-0 before:size-5 before:bg-primary 
       before:shadow-lg before:shadow-primary">
       <span className='text-primary block '>2021 - 2024</span>
       <h5 className='h4'>Graphic Designer / Owner</h5>
       <span className='text-primary'>Nagarjun Computer and Printing Press</span>
      </div>
      {/* Experience Card */}
      <div className="ml-3 border-l-4 border-primary/70 px-5 py-1 relative before:absolute before:-left-3 before:rounded-full before:top-0 before:size-5 before:bg-primary 
       before:shadow-lg before:shadow-primary">
       <span className='text-primary block '>2020 - 2021</span>
       <h5 className='h4'>Graphic Designer</h5>
       <span className='text-primary'>Niglashaini Computer and Printing Press</span>
      </div>

     </div>
    </div>
   </div>
  </div>
 )
}

export default About
