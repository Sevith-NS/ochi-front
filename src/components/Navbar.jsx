// eslint-disable-next-line no-unused-vars
import React from 'react'

function Navbar() {
  return ( 
    <div className="fixed z-[999] w-full px-20 py-8 font-neue flex justify-between items-center" >
      <div className='logosvg'> 
        Ochi
      </div>

        <div className='links flex gap-10 '>
            {["Services", "Our Work", "About", "Insight", "Contact"].map((item, index) =>(
                // Back tick inside a js function allows you to write dynanmic js code
                <a key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`}>{item}</a>
            ))}

        </div>
    </div>
  )
}

export default Navbar
