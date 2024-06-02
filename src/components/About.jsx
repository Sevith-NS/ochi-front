// eslint-disable-next-line no-unused-vars
import React from 'react'

function About() {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black'>
        <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw] tracking-tight ">
            Ochi is a strategic partner for fast-grow­ing tech businesses<br /> that need
            to raise funds, sell prod­ucts, ex­plain com­plex ideas<br/> and hire great 
            peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2' >
                <h1 className='text-7xl font-["Neue_Montreal"]'>Our Approach</h1>
                <button className='uppercase px-10 py-6 bg-zinc-900 rounded-full mt-10  text-white font-["Neue_Montreal"] flex gap-7 items-center'>Read More
                   <div className='w-2 h-2 bg-zinc-100 rounded-full'></div> 
                </button>
            </div>
            <div className='w-1/2 h-[80vh] bg-[#8b936a] rounded-3xl'>

            </div>
        </div>
    </div>
  )
}

export default About
