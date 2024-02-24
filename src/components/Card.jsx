import React from 'react'
import logos from '../assets/logos.png'

const Card = () => {
    return (
        <>
            <div className='flex gap-5'>
                <div className='h-[425px] md:w-[333px] bg-white my-5 grid grid-rows-2 rounded-[12px]'>
                    <div className=' flex items-center justify-center '>
                        <img src={logos} alt="" />
                    </div>
                    <div className='px-3' >
                        <div className='flex gap-3'>
                            <div className='w-[69px] h-[28px] bg-[#F2F4F7] rounded-[8px] text-[13px] flex items-center justify-center text-[#074786]'>20% Off</div>
                            <div className='w-[107px] h-[28px] bg-[#F2F4F7] rounded-[8px] text-[13px] flex items-center justify-center text-[#074786]'>Limited time</div>
                        </div>
                        <div>
                            <p className='text-[#626E79] text-center mr-7 font-bold mt-2'>Webbuilder 1 </p>
                        </div>
                        <div>
                            <p className='w-[284px] h-[48px] mt-1'>Computer Modern clasic with wix support</p>
                        </div>
                        <div className='flex items-end gap-2'>
                            <p className='text-[20px]'>$39.96</p>
                            <p className='text-[#9FA9B3] text-[14px]'>$49.96</p>
                            <p className='text-[#EF4C5D] text-[14px]'>(20% Off)</p>
                        </div>
                        <div>
                            <div className='bg-[#1B88F4] rounded-[12px] h-[48px] w-[270px] md:w-[220x] mt-2 flex items-center justify-center'>
                                <p className='text-white'>View Deal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card