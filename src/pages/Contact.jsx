import React from 'react'
import Navbar from '../components/Navbar'
import { Email, Reddit, Send, X } from '@mui/icons-material'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="h-[150vh] lg:h-[100vh] w-[100vw] m-0 p-0 flex flex-col ">
                <div className="lg:h-[80%] lg:w-[70%] flex flex-col lg:flex-row m-auto justify-center items-center">
                    <div className="h-[500px] lg:h-[100%] w-[85%] lg:w-[35%] flex flex-col justify-evenly items-center">
                        <div className="h-[20%] w-[90%] bg-[--SecBgColor]  rounded-[10px] flex cursor-pointer transition-all durarion-150 ease-in-out">
                            <div className="h-[100%] w-[35%] flex justify-center items-center">
                                <div className="w-[50px] h-[50px] lg:h-[60px] lg:w-[60px] border-[2px] border-solid border-[--MainTextColor] rounded-[50%] flex justify-center items-center text-[1.6em] bg-[rgb(250, 150, 150)]">
                                    <X />
                                </div>
                            </div>
                            <div className="h-[100%] w-[65%] flex flex-col justify-center">
                                <p className="text-[15px] font-extrabold">Twitter/X</p>
                                <p className="text-[1rem] font-[500]">@leakedflixx</p>
                            </div>
                        </div>
                        <div className="h-[20%] w-[90%] bg-[--SecBgColor]  rounded-[10px] flex cursor-pointer transition: all 0.2s ease-in-out; box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(0, 0, 0, 0.7)">
                            <div className="h-[100%] w-[35%] flex justify-center items-center">
                                <div className="w-[50px] h-[50px] lg:h-[60px] lg:w-[60px] border-[2px] border-solid border-[--MainTextColor] rounded-[50%] flex justify-center items-center text-[1.6em] bg-[rgb(250, 150, 150)]">
                                    <Reddit />
                                </div>
                            </div>
                            <div className="h-[100%] w-[65%] flex flex-col justify-center ">
                                <p className="text-[15px] font-extrabold">Reddit</p>
                                <p className="text-[1rem] font-[500] text-[rgb(84, 83, 83)]">r/nutflixx</p>
                            </div>
                        </div>
                        <div className="h-[20%] w-[90%] bg-[--SecBgColor]  rounded-[10px] flex cursor-pointer transition: all 0.2s ease-in-out; box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(0, 0, 0, 0.7)">
                            <div className="h-[100%] w-[35%] flex justify-center items-center">
                                <div className="w-[50px] h-[50px] lg:h-[60px] lg:w-[60px] border-[2px] border-solid border-[--MainTextColor] rounded-[50%] flex justify-center items-center text-[1.6em] bg-[rgb(250, 150, 150)]">
                                    <Email />
                                </div>
                            </div>
                            <div className="h-[100%] w-[65%] flex flex-col justify-center ">
                                <p className="text-[15px] font-extrabold">Email us</p>
                                <p className="text-[1rem] font-[500] text-[rgb(84, 83, 83)]">sample@example.com</p>
                            </div>
                        </div>
                        <div className="h-[20%] w-[90%] bg-[--SecBgColor]  rounded-[10px] flex cursor-pointer transition: all 0.2s ease-in-out; box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(0, 0, 0, 0.7)">
                            <div className="h-[100%] w-[35%] flex justify-center items-center">
                                <div className="w-[50px] h-[50px] lg:h-[60px] lg:w-[60px] border-[2px] border-solid border-[--MainTextColor] rounded-[50%] flex justify-center items-center text-[1.6em] bg-[rgb(250, 150, 150)]">
                                    <X />
                                </div>
                            </div>
                            <div className="h-[100%] w-[65%] flex flex-col justify-center ">
                                <p className="text-[15px] font-extrabold">Active Hours</p>
                                <p className="text-[1rem] font-[500] text-[rgb(84, 83, 83)]">Mon - Sat (09AM - 09PM)</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[80%] lg:w-[65%] flex flex-col justify-evenly items-center ">
                        <div className="h-[92%] w-[95%] bg-[--SecBgColor]  rounded-[10px] flex flex-col p-[20px] justify-evenly box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),-6px -6px 10px -1px rgba(0, 0, 0, 0.7)">
                            <h1 className="text-4xl font-extrabold uppercase ">Get In Touch</h1>
                            <p className="text-[13px] font-[400] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolore accusantium voluptas velit cum, eius architecto veniam.</p>
                            <form action="https://formsubmit.co/nutflixxx@protonmail.com" className='gap-5 flex flex-col '>
                                <div className="w-full flex justify-between ">
                                    <input type="text" placeholder="Your Full Name" name='user' className='h-[40px] w-[49%] p-[10px] text-[--HTextColor] font-[600] bg-[--MainBgColor] rounded-[10px] ' required />
                                    <input type="text" placeholder="Your Email" name='mail' className='h-[40px] w-[49%] p-[10px] text-[--HTextColor] font-[600] bg-[--MainBgColor] rounded-[10px]' />
                                </div>
                                <div className="flex flex-col ">
                                    <input type="text" placeholder="Subject" name='_subject' className='mb-[10px] h-[40px] p-[10px] text-[--HTextColor] font-[600] bg-[--MainBgColor] rounded-[10px]' />
                                    <textarea name="Message" id="message" cols="30" rows="10" placeholder="Message . . ." className='p-[10px] h-[150px] w-auto text-[--HTextColor] font-[600] bg-[--MainBgColor] rounded-[10px]'></textarea>
                                </div>
                                <button className='h-[40px] w-[150px] rounded-[5px] border-none bg-[--SecBgColor] font-[600] flex justify-center items-center text-[white] cursor-pointer transition-all duration-350 ease-in-out hover:scale-[1.1] hover:bg-[--HTextColor] hover:text-[--MainTextColor] '><p>Send Message <Send /></p></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact