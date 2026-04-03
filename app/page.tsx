'use client';
import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import EducationCard from "./components/cards/educationCard";
import Banner from "./components/banner";
import About from "./components/about";
import Skills from "./components/cards/skills";
import ProjectCard from "./components/cards/projectCard";
import ServiceCard from "./components/cards/serviceCard";
import BlockTitle from "./components/blockTitle";
import serviceCardData from "./data/data.json"
import projectCardData from "./data/data.json"
import ContactInfo from "./components/contactInfo";
import contactInfo from "./data/data.json"
import Form from "./components/form";
import { useState } from "react";
export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div className="flex flex-col grow">
      <Header setHeaderHeight={setHeaderHeight} />
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1">
        <Banner headerHeight={headerHeight} />
        <About />

        {/* Skils */}
        <Skills />


        {/* Project Section */}
        <section className="py-10 lg:py-14" id="projects">
          <div className="container">
            <BlockTitle
              title="Featured Projects"
              description="Here are some of the projects I’ve built, showcasing my skills in creating modern, responsive, and user-friendly web applications."
              customClass="mb-10"
            />
            <div className="flex flex-wrap -mx-3">
              {projectCardData.projectData.map((item, index) => (
                <div className="w-full md:w-1/2 lg:w-1/3 px-3" key={index}>
                  <ProjectCard
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    liveLink={item.liveLink}
                    githubLink={item.githubLink}
                    icon={item.icon}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="py-12 md:py-16 lg:py-24" id="services">
          <BlockTitle
            title='What I Offer'
            description='I deliver end-to-end web development solutions, combining modern technologies, clean design, and optimized performance to create scalable and user-focused applications.'
            customClass='mb-10'
          />
          <div className="container">
            <div className="flex flex-wrap justify-center gap-y-6 -mx-3">
              {serviceCardData.serviceData.map((item, index) => {
                return (
                  <div className="w-full md:w-1/2 lg:w-1/3 px-3" key={index}>
                    <ServiceCard
                      iconClass={item.icon}
                      cardTitle={item.tilte}
                      cardDescription={item.description}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/* Get In Touch */}
        <section className="py-8 md:py-10 lg:py-14" id="contact">
          <div className="container">
            <BlockTitle
              title="Get In Touch"
              description="Have a project in mind? Let's work together to bring your ideas to life."
              customClass="mb-10 lg:mb-14"
            />
            <div className="flex flex-wrap -mx-2 lg:-mx-3">
              <div className="w-full md:w-1/2 px-2 lg:px-3">
                <div className="h-full bg-white/5 border border-white/30 rounded-md py-7 px-5 mb-10 space-y-5">
                  <div className="mb-5 md:mb-7">
                    <h3 className='mb-2 h4'><span className="text-primary">Contact</span> Information</h3>
                    <p>Looking for a full stack developer for your project? Let’s connect and build something amazing.</p>
                  </div>
                  {contactInfo.contactInfoData.map((item, index) => (
                    <ContactInfo
                      key={index}
                      iconClass={item.iconClass}
                      eyebrowText={item.eyebrowText}
                      contactInfo={item.contactInfo}
                      contactLink={item.contactLink}
                      targetValue={item.targetValue}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 lg:px-3">
                <Form />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
