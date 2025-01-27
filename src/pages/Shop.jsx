import React from 'react'
import Navbar from '../components/Navbar'
import { productArray } from '../Array/productArray'
import { ShoppingBasket, ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className="flex px-10 p-5 gap-7 flex-wrap justify-around items-center  w-full relative">
                {/* {templates.map((product)=>(
                    <h1>Template Name</h1>
                ))} */}
                {productArray.map((product) => (
                    <Link to={product.lnk}>

                        <div key={product._id} className="bg-[--HTextColor] w-[270px] h-[410px] flex flex-col p-[15px] rounded-[5px] text-left cursor-pointer " /*onClick={() => handleOpen(product._id)} */>
                            <img src={product.image} alt="Product Preview" className='w-full min-h-[225px] object-cover rounded-[2.5px] mb-[20px] ' />
                            <div className="justify-between flex flex-col h-full">

                                <div className="flex justify-between w-full">
                                    <h1 className='font-extrabold text-2xl'>{product.productName}</h1>
                                    <p>{product.category}</p>
                                </div>

                                <p className='h-[80px] break- overflow-hidden '>{product.description}</p>

                                <div className="flex gap-[15px] justify-between">
                                    <div className="flex gap-px">
                                        {product.sale && <p className='font-light text-md line-through'>${product.sale}</p>}
                                        <p className='font-extrabold text-2xl'>${product.price}</p>
                                    </div>
                                    <Link to={product.lnk} className='flex items-center content-center gap-2 ' ><ShoppingBasket /></Link>
                                </div>

                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default Shop