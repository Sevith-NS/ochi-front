// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from "framer-motion"
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
   
    return (
        //Locomotive gives the data scroll thingy
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-40 px-20'>
                {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
                    return (
                            <div key="" className='masker' >
                                <div className='w-fit flex'>
                                    {index === 1 && (
                                        <motion.div 
                                            initial={{width: 0}} 
                                            animate={{width: "8vw"}} 
                                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1 }} 
                                            className='w-[8vw] rounded-md mr-[0.5vw] relative h-[4.3vw] bg-[url("/img.jpg")] bg-cover'></motion.div>)} 
                                    <h1 className='flex items-center uppercase text-[7vw] leading-[7vw]  font-["Founders_Grotesk"] font-bold'>
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                })}


            </div>
            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between font-["Neue_Montreal"] items-center py-5 px-20'>
                {["For Public and Private companies", "From the first Pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>

                ))}
                <div className='start flex items-center gap-5 '>
                    <div className='px-5 py-2 border-[1px] rounded-full border-zinc-500 font-light text-md uppercase font-["Neue_Montreal"]'>Start the project</div>
                    <div className='w-10 h-10 ml-[-10px] flex items-center rounded-full border-[1px] border-zinc-400'>
                        <span className='rotate-[45deg] ml-2.5'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LandingPage;
