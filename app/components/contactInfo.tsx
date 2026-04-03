import React from 'react'
type Props = {
 iconClass?: string
 eyebrowText?: string
 contactInfo?: string
 contactLink?: string
 targetValue?: string
}
const ContactInfo = ({ iconClass, eyebrowText, contactInfo, contactLink, targetValue }: Props) => {
 return (
  <>
   {(iconClass || eyebrowText || contactInfo || contactLink) &&
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 relative group bg-primary/5 p-4 rounded-lg border border-primary/40">
     {iconClass &&
      <div className="bg-primary border border-primary transition-all duration-300 rounded-2xl size-14 flex justify-center items-center shadow-2xl shadow-primary/70 group-hover:bg-transparent group-hover:text-primary group-hover:-rotate-10">
       <i className={`${iconClass} text-2xl xl:text-3xl`}></i>
      </div>
     }
     {(eyebrowText || contactInfo) &&
      <div className="flex flex-col">
       {eyebrowText &&
        <span className='text-primary transition-all duration-300 group-hover:text-white group-hover:animate-bounce'>{eyebrowText}</span>
       }
       {contactInfo &&
        <a href={`${contactLink}`} target={targetValue || "_self"}
         className='text-white stretched-link transition-all duration-300 group-hover:text-primary font-semibold'>{contactInfo}</a>
       }
      </div>
     }
    </div>
   }
  </>
 )
}

export default ContactInfo;