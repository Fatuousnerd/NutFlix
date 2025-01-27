import { Instagram, Mail, Reddit, X } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='w-full h-[200px] bg-[--SecBgColor] flex flex-col items-center justify-around '>
                <div className="flex w-full items-center ">
                    <form action="https://formsubmit.co/nutflixxx@protonmail.com" className='flex w-full items-center justify-center'>
                        <input type="email" name="email" placeholder="Subscribe To Our Newsletter..." className='rounded-l-[5px] p-2 lg:w-4/12 ' />
                        <button type="submit" className='bg-[--HTextColor] p-2 uppercase font-bold rounded-r-[5px] '>Subscribe</button>
                    </form>
                </div>

                <div className="flex">
                    <ul className='flex gap-x-7 '>
                        <Link to="https://.com/" className="hover:text-[--HTextColor] hover:scale-[1.5] transiotion-all duration-500 "><X /></Link>
                        <Link to="https://.com/" className="hover:text-[--HTextColor] hover:scale-[1.5] transiotion-all duration-500 "><Instagram /></Link>
                        <Link to="https://.com/" className="hover:text-[--HTextColor] hover:scale-[1.5] transiotion-all duration-500 "><Reddit /></Link>
                        <Link to="https://.com/" className="hover:text-[--HTextColor] hover:scale-[1.5] transiotion-all duration-500 "><Mail /></Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Footer