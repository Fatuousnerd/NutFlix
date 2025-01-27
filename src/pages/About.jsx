import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <div className='relative min-h-[100vh] h-[150vh] lg:h-[100vh] lg:p-[50px] flex items-center justify-center  '>
                <div className="absolute flex flex-col lg:flex-row justify-between item-center w-[90vw] lg:h-[85vh] z-[99] bg-[--SecBgColor] rounded-[35px] lg:rounded-[70px] ">
                    <img src="./Media/red-bikini-ig-july-2020-v0-e45qyeivq4nc1.webp" alt="" className='flex-1 lg:rounded-tr-[0px] lg:rounded-l-[70px] rounded-t-[35px] ' />
                    <div className="flex flex-col flex-1 p-5 lg:p-7">
                        <h1 className='uppercase lg:text-9xl text-center text-6xl font-extrabold text-[--HTextColor] mb-4'>NUTFLIXX</h1>
                        <p className='font-bold text-xl lg:text-justify text-center'>
                            Nutflixx is a global platform that offers a vast collection of adult videos,
                            exclusive content, and live performances across various categories.
                            Launched to provide premium NSFW entertainment,
                            it has evolved into a leading on-demand service available to users worldwide.
                            Nutflixx produces unique, high-quality original content,
                            making it a major player in the adult entertainment industry.
                            The platform allows users to stream content on multiple devices,
                            offering personalized recommendations based on viewing preferences for an immersive,
                            tailored experience.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About