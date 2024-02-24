import React from 'react'
import vector from '../assets/Vector.png'
const Vector = () => {

  return (
    <div className='mt-3 grid grid-cols-3 md:flex gap-2 md:gap-3'>
        <div className='flex items-center gap-3 text-[10px] md:text-[13px]'>
            <p className='text-[#727D87]'>Home</p>
            <img src={vector} className='h-[8.25px] w-[10px]' alt="" />
        </div>
        <div className='flex items-center gap-3 text-[10px] md:text-[13px]'>
            <p className='text-[#727D87]'>Hosting for all</p>
            <img src={vector} className='h-[8.25px] w-[10px]' alt="" />
        </div>
        <div className='flex items-center gap-3 text-[10px] md:text-[13px]'>
            <p className='text-[#727D87]'>Hosting</p>
            <img src={vector} className='h-[8.25px] w-[10px]' alt="" />
        </div>
        <div className='flex items-center gap-3 text-[10px] md:text-[13px]'>
            <p className='text-[#727D87]'>Hosting6</p>
            <img src={vector} className='h-[8.25px] w-[10px]' alt="" />
        </div>
        <div className='flex items-center gap-3 text-[10px] md:text-[13px]'>
            <p className='text-[#727D87]'>Hosting5</p>
        </div>
    </div>
  )
}

export default Vector