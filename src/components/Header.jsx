import React from 'react'
import tick from '../assets/tick.png'
import icon from '../assets/image2.png'
import arrow from '../assets/arrow.png'
import Tools from './Tools'
import Vector from './Vector'
const Header = () => {
    
    return (
        <div className='mx-7 bg-[#FBFCFD]'>
            <h2 className='pt-9 lg:pt-7 font-[400px] text-[27px]  md:text-[48px] font-Inter text-[#2C384A] '>Best Website builders in the US</h2>
            <div className='border-[1px] mt-2 text-[#E1E4E6]'></div>
            <div className='flex justify-between'>
                <div className=' flex flex-col items-start md:flex-row md:flex mt-4 mb-1 md:items-center gap-4 text-[10px] md:text-[13px] text-[#2C384A]'>
                    <div className='flex gap-2'>
                        <img src={tick} alt="" width={18}  />
                        <p className='text-[#4B5665] '  >Last Updated - <span className='ml-2'>February 22, 2020</span></p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src={icon} alt="" width={18} />
                        <p className='text-[#4B5665] '>Advertising Disclosure</p>
                    </div>
                </div>
                <div className='flex items-center gap-1 md:gap-2 text-[10px] md:text-[14px] text-[#2C384A]'>
                    <p className='text-[#727D87] '>Top Relevant</p>
                    <img src={arrow} width={18} alt="" />
                </div>
            </div>
            <div className='border-[1px] mt-2 text-[#E1E4E6]'></div>
           <Tools/>
           <Vector/>
        </div>
    )
}

export default Header