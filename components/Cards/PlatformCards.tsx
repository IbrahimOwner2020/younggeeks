import React from 'react'
import Image from 'next/image'

interface Props {
    name: string,
    description: string,
    icon: string
}

const PlatformCards = ({ name, description, icon }: Props) => {
    return (
        <div className='shadow-card z-40 bg-white rounded-xl px-4 min-w-[290px] lg:px-6 py-3 sm:py-4 lg:py-6'>
            <div className='my-2'>
                <Image src={icon} alt={name} width={34} height={34} />
            </div>
            <h3 className='text-blackPrimary text-lg xl:text-xl font-bold mb-2'>{name}</h3>
            <p className='text-blackPrimary2 text-xs xl:text-sm'>{description}</p>
        </div>
    )
}

export default PlatformCards