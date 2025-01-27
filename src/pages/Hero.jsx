import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Hero = () => {
    return (
        <>
            <Navbar />
            <div className='relative h-[100vh] p-[10px] flex items-center justify-center  '>
                <div className="absolute flex flex-wrap gap-x-[200px] gap-y-9 justify-between item-center w-[90vw] h-[90vh] lg:w-[95vw] lg:h-[95vh] z-[99] bg-[url(./Media/Hero.png)] bg-cover brightness-50 rounded-[40px] ">
                </div>
                {/* <h1 className="text-[5rem] text-[--DarkTextColor] font-extrabold text-center z-[99] ">Ready for More? Unlock Private Galleries and Custom Videos by Joining Now!</h1> */}
            </div>
            <Footer />
        </>
    )
}

export default Hero