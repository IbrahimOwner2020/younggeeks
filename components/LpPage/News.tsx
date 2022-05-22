import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

const news = [
    {
        image: '/images/unsplash_eqlRthvN188.png',
        type: 'Consultant',
        date: 'Jan 10, 2022',
        description: 'Lorem ipsum dolor sit amet, conetur adipiscing elit. Risus, vitae.'
    },
    {
        image: '/images/unsplash_FBdmhGMdCso.png',
        type: 'Pro tips',
        date: 'Jan 12, 2022',
        description: 'Lorem ipsum dolor sit amet, conetur adipiscing elit. Risus, vitae.'
    },
]

const News = () => {
    return (
        <div className='max-w-6xl 2xl:max-w-7xl mx-auto px-6 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-[3fr,4fr]'>
            <div className='flex flex-col items-stert justify-between mb-12 sm:mr-24'>
                <p className='text-blackPrimary2 font-bold'>News</p>
                <h3 className='text-blackPrimary font-black text-2xl sm:text-3xl'>Our Latest news and articles</h3>
                <p className='text-blackPrimary2'>Lorem ipsum dolor sit amet, consectetur adispiscing elit. At elementum proin egestas turpis. Tictiduct loe duis donec sed.</p>
                <Link href='/' passHref>
                    <a className='flex items-center text-blackPrimary'>All Articles <BsArrowUpRight className='w-4 h-4 ml-1' /></a>
                </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                {news.map((el, index) => (
                    <div key={index} className="">
                        <div className="relative w-full aspect-[16/10]">
                            <Image src={el.image} alt={el.type} layout='fill' />
                        </div>
                        <div className="flex items-center space-x-3 text-blackPrimary2 my-3 font-medium">
                            <span>{el.type}</span>
                            <hr className='h-1 w-10 bg-blackPrimary2' />
                            <span>{el.date}</span>
                        </div>
                        <h3 className='text-blackPrimary text-md sm:text-lg font-semibold'>{el.description}</h3>
                    </div>
                ))}                
            </div>
        </div>
    )
}

export default News