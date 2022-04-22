import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-grayBack py-24'>
            <div className='px-4 max-w-6xl 2xl:max-w-7xl mx-auto'>
                <div>
                    <Link href="/" passHref>
                        <a className='flex items-end justify-start'>
                            <h1 className='text-blackPrimary text-2xl sm:text-3xl font-extrabold'>Younggeks</h1>
                            <span className='text-blackPrimary2 text-sm sm:text-base ml-2'>Inc</span>
                        </a>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adispiscing elit. At elementum proin egestas turpis.
                    </p>
                    <h3>Stay connect</h3>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer