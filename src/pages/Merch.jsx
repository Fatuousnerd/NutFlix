import React from 'react'
import Navbar from '../components/Navbar'

const Merch = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full">
                <iframe src="https://nutflixx.printify.me/products" frameborder="0" className='w-full h-[100vh]'></iframe>
            </div>
        </>
    )
}

export default Merch