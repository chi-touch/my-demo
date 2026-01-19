'use client';

import Image from 'next/image'

const aboutbutton = () => {
  return (
    <>
    <button type = "button" id="explore-btn" className="mt-7 mx-auto" onClick={() =>console.log('CLICK')}>
      About</button>
        {/* <a href="#events">
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
            About
        </a> */}
    </>
    
  )
};

export default aboutbutton;