// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion"

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
        const handleHoverEnd = (index) => {
            cards[index].start({ y: "100%" })

        }

        return (
            <div className='w-full py-10 bg-zinc-800'>
                <div className='w-full px-10 border-b-[1px] border-zinc-700'>
                    <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight px-5 py-10'>Featured Projects</h1>
                </div>
                <div className='px-20'>
                    <div className='cards w-full flex gap-10 mt-20'>

                        <motion.div
                            onHoverStart={() => handleHover(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            className='cardcontainer relative w-1/2 h-[75vh]'
                        >
                            <h1 className='absolute overflow-hidden flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["neue_Montreal"]'>
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: [0.33, 1, 0.68, 1], delay: index*.05 }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>

                            <div className='rounded-xl overflow-hidden w-full h-full'>
                                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />

                            </div>
                        </motion.div>
                        <motion.div
                            onHoverStart={() => handleHover(1)}
                            onHoverEnd={() => handleHoverEnd(1)}
                            className='cardcontainer relative w-1/2 h-[75vh]'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter font-["neue_Montreal"]'>
                                {"VISE".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.33, 1, 0.68, 1], delay: index * .05 }}
                                        className='inline-block'
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <div className='rounded-xl overflow-hidden w-full h-full'>
                                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />

                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        )
    }

export default Featured;
