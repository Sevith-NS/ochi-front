// eslint-disable-next-line no-unused-vars
import React from "react";
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1
              initial={{x: "0"}} 
              animate={{x: "-100%"}}  
              transition={{repeat: Infinity, ease: "linear", duration: 10}}
              className='text-[17vw] leading-none font-groteskCond uppercase -mb-[3.5vw] pt-[3vw] font-semibold pr-20'>We are Ochi
            </motion.h1>

            <motion.h1
              initial={{x: "0"}} 
              animate={{x: "-100%"}}  
              transition={{repeat: Infinity, ease: "linear", duration: 10}}
              className='text-[17vw] leading-none font-groteskCond uppercase -mb-[3.5vw] pt-[3vw] font-semibold pr-20'>We are Ochi
              </motion.h1>      
        </div>
    </div>
  )
}

export default Marquee
