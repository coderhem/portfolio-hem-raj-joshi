'use client';
import React, { useEffect, useRef, useState } from 'react';
import BlockTitle from '../blockTitle';

const Skills = () => {
  const skills = [
    { name: 'HTML', value: 95, icon: 'icon-html' },
    { name: 'CSS', value: 95, icon: 'icon-css' },
    { name: 'JavaScript', value: 83, icon: 'icon-js' },
    { name: 'Typescript', value: 82, icon: 'icon-typescript' },
    { name: 'React', value: 82, icon: 'icon-react' },
    { name: 'Java', value: 80, icon: 'icon-java' },
    { name: 'Tailwind CSS', value: 80, icon: 'icon-tailwind' },
    { name: 'Responsive Design', value: 94, icon: 'icon-mobile' },
    { name: 'Performance Enhance', value: 88, icon: ' icon-meter' },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // start animation
        } else {
          setAnimate(false); // reset when section leaves viewport
          setProgress(skills.map(() => 0));
        }
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [skills]);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) => (val < skills[i].value ? val + 1 : val))
      );

      // stop interval when all bars reach target
      if (progress.every((val, i) => val >= skills[i].value)) clearInterval(interval);
    }, 40); // adjust speed here

    return () => clearInterval(interval);
  }, [animate, progress, skills]);

  return (
    <section ref={sectionRef} className="py-12 md:py-14 lg:py-20 xl:py-24 relative before:absolute before:size-20 before:bg-primary/10 before:rounded-full before:top-0 before:-left-10" id='skills'>
      <div className="container">
        <BlockTitle
          title="Skills & Expertise"
          description="Skilled in both frontend and backend development..."
          customClass="mb-12"
        />
        <div className="flex flex-wrap gap-y-6 -mx-3">
          {skills.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3">
              <div className="bg-white/5 border border-white/20 p-7 rounded-md transition-all duration-300 hover:border-primary group hover:shadow-xl hover:shadow-primary/20 hover:scale-[102%] hover:-rotate-2 h-full">
                {/* Icon + Title */}
                <div className="flex items-center mb-5">
                  <div className="bg-primary rounded-md flex justify-center items-center shadow w-14 h-14 mr-3 group-hover:shadow-md transition-all duration-300 group-hover:shadow-primary">
                    <i className={`${item.icon} text-2xl`}></i>
                  </div>
                  <div className='flex-1'>
                    <h3 className="h4">{item.name}</h3>
                    <span className="text-primary">{progress[index]}% Proficiency</span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-primary rounded-full transition-all duration-200"
                    style={{ width: `${progress[index]}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;