import React from 'react'
import image5 from '../assets/image5.png'
const   Footer = () => {
    return (
        <div className='h-[452px] w-screen bg-[#212731]'>
            <div className=' w-[1080px]  mx-auto text-white pt-3 md:pt-[54px]'>
                <div className='flex flex-col mx-16 md:mx-0 md:grid md:grid-cols-3  gap-5'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-[16px] '>CATEGORIES</div>
                        <div className='flex flex-col gap-4'>
                            <div className='  text-[#B6BDC4] text-[13px]'>Web Builder</div>
                            <div className='  text-[#B6BDC4] text-[13px]'>Hosting</div>
                            <div className=' text-[#B6BDC4] text-[13px]'>Data Center</div>
                            <div className='  text-[#B6BDC4] text-[13px]'>Robotic-Automation</div>

                        </div>
                    </div>
                    <div className='flex flex-col  gap-3'>
                        <div className='text-[16px] '>CONTACT</div>
                        <div className='flex flex-col gap-4'>
                            <div className='  text-[#B6BDC4] text-[13px]'>Contact</div>
                            <div className='  text-[#B6BDC4] text-[13px]'>Privacy Policy</div>
                            <div className=' text-[#B6BDC4] text-[13px]'>Terms Of Service</div>
                            <div className='  text-[#B6BDC4] text-[13px]'>Categories</div>
                            <div className='  text-[#B6BDC4] text-[13px]'>About</div>

                        </div>
                    </div>
                    <div className='flex gap-2 items-center text-[13px] text-[#B6BDC4]   '>
                        <div>United States</div>
                        <img src={image5} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer