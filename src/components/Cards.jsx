// eslint-disable-next-line no-unused-vars
import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen  bg-zinc-800 flex items-center gap-5 px-32'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='relative card flex justify-center items-center rounded-xl  w-full h-full  bg-[#004D43]'>
                    <img className='w-48' src="https://pngimg.com/uploads/nike/nike_PNG4.png" />
                    <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>&copy;2019-2020</button>
                </div>
            </div>
            <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
                <div className='relative flex justify-center items-center card rounded-xl w-full h-full  bg-[#353b3a]'>
                    <img className='w-32 mb-[2px]' src="https://www.pngkey.com/png/full/54-542261_adidas-white-logo-png-adidas-white-logo-vector.png" />
                    <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>&copy;2019-2020</button>

                </div>
                <div className='relative flex justify-center items-center card rounded-xl w-full h-full  bg-[#a4bebb]'>
                    <img className='w-20 mb-[40px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png" />
                    <button className='px-5 py-1 rounded-full border-2 absolute left-10 bottom-10'>&copy;2019-2020</button>

                </div>
            </div>
        </div>
    )
}

export default Cards
