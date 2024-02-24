import React, { useState } from 'react'
import search from '../assets/search.png'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState()
    return (
        <div className='bg-[#212731] max-w-screen   h-[64px]  lg:w-[1614px] pl-10 md:pl-24 text-white flex items-center justify-between px-4 md:justify-center lg:gap-[60px] font-Inter text-[14px] '>
            <div className='relative'>
                <input className='outline-none w-[150px] md:w-[258px] py-2 md:py-[7px] rounded-md' type="text" name="" id="" />
                <img src={search} className='absolute top-1 left-2 lg:top-[5px] lg:left-[9px]' alt="" />
            </div>
            <div className='hidden md:flex lg:gap-[60px]'>
                <div className='text-[#D1D6DA] ml-5'>
                    Categories
                </div>
                <div className='text-[#D1D6DA]'>
                    Website Builders
                </div>
                <div className='text-[#D1D6DA] pl-2' >
                    Today's deals
                </div>
            </div>
            <div className='lg:hidden'>
            <FaBars size={25} />
            </div>
        </div>
    )
}

export default Navbar