import React from 'react'

type blockTitleData = {
 title?: string;
 description?: React.ReactNode;
 customClass?: string;
}
const BlockTitle = ({ title, description, customClass }: blockTitleData) => {
 return (
  <div className={`text-center max-w-3xl mx-auto ${customClass}`}>
   {title &&
    <h2 className='inline-block relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-primary before:rounded-full pb-3 mb-3'>{title}</h2>
   }
   {description &&
    <p dangerouslySetInnerHTML={{ __html: description }} />
   }
  </div>
 )
}

export default BlockTitle;