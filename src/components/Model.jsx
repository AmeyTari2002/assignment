import React from 'react'
import logo from '../assets/logos.png'
import rectangle from '../assets/Rectangle.png'
import icons from '../assets/icon1.png'
import image4 from '../assets/image4.png'
import mark from '../assets/mark.png'
import image3 from '../assets/image3.png'
import star from '../assets/star1.png'

const Model = ({ BestChoice, BestImg, BestText, number, height, content, Builder, heading, para, highlights, para2, show, showimg, showMoreimg, rating, review, stars }) => {
    console.log(content)
    const containerClassName = `md:grid md:grid-cols-4 md:gap-5 ${height ? `h-${height}` : ''}`;
    return (
        <>
            <div className='mx-7 mt-20 md:mt-16 bg-white'>
                <div className={containerClassName}>
                    <div className=' flex items-center justify-center relative'>
                        <img src={rectangle} className='absolute top-0 -left-6 border-2 rounded-full' alt="" />
                        <p className='absolute top-3 -left-1'>{number}</p>
                        {BestChoice && (
                            <div className='w-fit px-1 h-[34px] bg-[#FF7724] absolute -top-10 left-0 rounded-tr-[8px] rounded-br-[8px]'>
                                <div className='flex gap-1 items-center px-2 py-1'>
                                    <img src={BestImg} alt="" />
                                    <p className='text-[16px] text-white'>{BestText}</p>
                                </div>
                            </div>
                        )}
                        <div className='flex flex-col items-center gap-1    '>
                            <img src={logo} alt="" />
                            <p className='text-[#626E79] text-[13px] mt-2'>{Builder}</p>
                        </div>

                    </div>
                    <div className='col-span-2  leading-[24px]' >
                        <p className='text-[16px] text-[#4B5665] leading-[24px] font-[400]'><span className='font-bold'>{heading}</span>{para}
                        </p>
                        <div className='font-bold leading-[24px] mt-1'>
                            {highlights}
                        </div>
                        <div className='text-[#4B5665] ml-[18px] mt-3   '>
                            {para2 && (
                                para2
                            )}
                        </div>
                        <div className='text-[#4B5665] ml-[20px] mt-3   '>
                            {content &&
                                <div>
                                    <div className='  mmd:w-[460px] h-[116px] bg-[#FFF4ED] rounded-[12px]'>
                                        <div className='pt-[8px] pl-[12px] flex gap-[8px] '>
                                            <p className='w-[40px] h-[28px] bg-white flex items-center justify-center rounded-[4px] text-[#1B88F4]'>9.9</p>
                                            <p className='text-[15px] text-[#4B5665]' >Building Responsive</p>
                                        </div>
                                        <div className='pt-[8px] pl-[12px] flex gap-[8px] '>
                                            <p className='w-[40px] h-[28px] bg-white flex items-center justify-center rounded-[4px] text-[#1B88F4]'>8.9</p>
                                            <p className='text-[15px] text-[#4B5665]' >Cool</p>
                                        </div>
                                        <div className='pt-[8px] pl-[12px] flex gap-[8px] '>
                                            <p className='w-[40px] h-[28px] bg-white flex items-center justify-center rounded-[4px] text-[#1B88F4]'>8.9</p>
                                            <p className='text-[15px] text-[#4B5665]' >Docs</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div>
                            {content &&
                                <div className='pl-3 mt-2'>
                                    <div>
                                        <h1>Why we love it</h1>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <div className='flex gap-2'>
                                            <img src={mark} alt="" />
                                            <p className='text-[#4B5665] text-[15px]'>Documentation</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={mark} alt="" />
                                            <p className='text-[#4B5665] text-[15px]'>Easy Use</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <img src={mark} alt="" />
                                            <p className='text-[#4B5665] text-[15px]'>Out Of Box</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className='text-[#1B88F4] flex text-[16px] mt-[9px] gap-1'>
                            <p>{show}</p>
                            {/* <img src={image3} alt="" className='w-[16px]' /> */
                                showimg && (
                                    <img src={showMoreimg} alt="" className='w-[16px]' />
                                )
                            }
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3 md:justify-between   relative' >
                        <div className='bg-[#F3F9FF] mt-2 md:-top-9  relative h-[118px] w-[135px] mx-auto rounded-bl-[12px] rounded-br-[12px] flex flex-col items-center justify-center'>
                            <div >
                                <p className='text-[32px] text-[#074786]'>{rating}</p>
                                <img src={image4} className='absolute top-3 right-8' alt="" />
                            </div>
                            <p className='text-[#074786]'>{review}</p>
                            <img src={stars} alt="" />

                        </div>
                        <div>
                            <div className='bg-[#1B88F4] rounded-[12px] m h-[48px] w-[215x] flex  items-center justify-center'>
                                <p className='text-white'>View</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Model