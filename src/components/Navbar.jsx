import { Link } from 'react-router-dom'
import ThemeToggle from '../utils/ThemeTogggle'
import { CallRounded, CheckroomRounded, Home, HomeRounded, InfoRounded, LiveTvRounded, StoreRounded } from '@mui/icons-material'

const Navbar = () => {
    return (
        <>
            <div className='h-[100px] lg:h-[90px] w-full py-5 bg-[--SecBgColor] flex flex-col lg:flex-row justify-center lg:justify-around items-center '>

                <Link to="/" className="flex h-[60px] lg:h-[100px] ">
                    <img src="./icons/icon3.png" alt="Logo" className='h-full w-full' />
                </Link>

                <ul className="hidden lg:flex gap-x-7">
                    <li><Link to="/" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>Home</Link></li>
                    <li><Link to="/about" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>About</Link></li>
                    <li><Link to="/shop" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>Shop</Link></li>
                    <li><Link to="/merch" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>Merch</Link></li>
                    {/* <li><Link to="https://nutflixx.chaturbate.com" target='_blank' className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>Webcams</Link></li> */}
                    <li><Link to="/contact" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '>Contact</Link></li>
                </ul>
                
                <ul className="flex lg:hidden gap-x-7">
                    <li><Link to="/" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><HomeRounded/></Link></li>
                    <li><Link to="/about" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><InfoRounded/></Link></li>
                    <li><Link to="/shop" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><StoreRounded/></Link></li>
                    <li><Link to="/merch" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><CheckroomRounded/></Link></li>
                    <li><Link to="https://nutflixx.chaturbate.com" target='_blank' className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><LiveTvRounded/></Link></li>
                    <li><Link to="/contact" className='text-2xl font-bold hover:text-[--HTextColor] uppercase '><CallRounded/></Link></li>
                    {/* <ThemeToggle/> */}
                </ul>

                <div className="hidden lg:flex gap-5 ">
                    <Link to="https://nutflixx.chaturbate.com" target='_blank' className='text-3xl font-extrabold uppercase lg:py-2 lg:px-9 rounded-[2.5px] bg-[--HTextColor]'>Webcams</Link>
                    <ThemeToggle />
                </div>
            </div>
        </>
    )
}

export default Navbar