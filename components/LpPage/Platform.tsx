import React from 'react'
import { platform } from '../../context/LpPage/platform'
import PlatformCards from '../Cards/PlatformCards'

const Platform = () => {
    return (
        <div className="bg-grayBack2 py-16">
            <div className='max-w-6xl 2xl:max-w-7xl mx-auto px-4'>
                <p className='text-base text-blackPrimary2'>Platform</p>
                <h2 className='text-blackPrimary font-black text-3xl my-4'>Built for developer success</h2>
                <p className='text-sm text-blackPrimary2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At elementum proin egestas turpis. Tincidunt leo duis donec sed sociis proin nunc sapien massa. Sodales eu diam quis amet sed u. Laoreet eu habitant ac. Lorem ipsum dolor sit amet.</p>
                <div className='flex items-center justify-start space-x-4 my-12'>
                    <button className='text-white border text-xs xs:text-sm border-bluePrimary bg-bluePrimary px-4 py-3 rounded-lg'>Discover the platform</button>
                    <button className='border text-xs xs:text-sm border-bluePrimary text-bluePrimary px-4 py-3 rounded-lg'>Developer resources</button>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {platform.map((el, index) => (
                        <PlatformCards
                            key={index}
                            name={el.name}
                            icon={el.icon}
                            description={el.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Platform