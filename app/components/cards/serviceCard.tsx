import React from 'react'

type serviceCardData = {
 iconClass: string;
 cardTitle: string;
 cardDescription: string;
 descStyle?: string;
}
const ServiceCard = ({ iconClass, cardTitle, cardDescription, descStyle }: serviceCardData) => {
 return (
  <>
   <div className="h-full transition-all duration-300 bg-white/10 px-4 lg:px-8 py-5 border border-primary/30 rounded hover:shadow-[0_0_20px_2px_rgba(255,105,0,0.20)] hover:bg-primary/5 group">
    <div className=" mb-5 bg-linear-to-l from-primary via-dark-orange/80 to-yellow/40 rounded-md size-14 inline-flex justify-center items-center group-hover:scale-110 transition-all duration-300">
     <i className={`${iconClass} text-2xl`}></i>
    </div>
    <h3 className='h4 mb-4 font-base font-semibold'>{cardTitle}</h3>
    <div className={`[&_p]:text-base ${descStyle}`} dangerouslySetInnerHTML={{ __html: cardDescription }} />
   </div>
  </>
 )
}

export default ServiceCard;
