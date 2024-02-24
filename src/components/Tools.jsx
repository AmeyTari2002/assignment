import React from 'react'

const Tools = () => {
    const data = [
        {
            id: 1,
            content: "Tools",
        },
        {
            id: 2,
            content: "AWS Builder",
        },
        {
            id: 3,
            content: "Start Build",
        },
        {
            id: 4,
            content: "Build Supplies",
        },
        {
            id: 5,
            content: "Tooling",
        },
        {
            id: 6,
            content: "BlueHosting",
        },
    ]
    return (
        <div className='grid grid-cols-2 text-[13px] md:text-[13px] md:flex md:gap-2 mt-4 '>
            {data.map((content) => (
                <div key={content.id}>
                    <h1 className='w-[125px] h-[36px] rounded-[12px] px-2 py-1 text-[#4B5665] bg-[#FFFFFF]'>{content.content}</h1>
                </div>
            ))}
        </div>
    )
}

export default Tools