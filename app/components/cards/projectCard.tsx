'use client'
import React from 'react'

type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  liveLink: string
  githubLink: string
  icon: string
}

const ProjectCard = ({ title, liveLink, githubLink, subtitle, description, tags, icon }: Project) => {
  return (
    <>

      <div className='rounded-md bg-white/10 group overflow-hidden h-full'>
        <div className="relative bg-linear-to-l from-primary/40 to-dark-orange/40 rounded-tr-md rounded-tl-md flex justify-center py-8 md:py-12 px-5">
          <div className="bg-linear-to-l from-primary to-dark-orange p-4 rounded-2xl">
            <h2 className='h4'>{title}</h2>
          </div>

          <div className="transition-all duration-300 z-1 lg:-z-10 absolute inset-0 translate-y-0 lg:-translate-y-full lg:group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-1 bg-black/20 flex justify-center items-end lg:items-center">
            <div className="flex max-lg:justify-between gap-4 max-lg:w-full p-5">
              <a href={liveLink} target='_blank' className='transition-all duration-300 bg-white/30 border border-white rounded-full p-1 size-12 flex justify-center items-center text-white backdrop-blur text-2xl hover:scale-105'>
                <i className="icon-arrow-up-right"></i>
              </a>
              <a href={githubLink} target='_blank' className='transition-all duration-300 bg-white/30 border border-white rounded-full p-1 size-12 flex justify-center items-center text-white backdrop-blur text-2xl hover:scale-105'>
                <i className={`${icon}`}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <h3 className='h4 text-dark-orange/80'>{subtitle}</h3>
          <div className="mb-5">
            <p>{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, i: number) => (
              <span
                key={i}
                className='bg-primary/10 rounded border border-dark-orange/30 py-1 px-2 text-yellow text-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard