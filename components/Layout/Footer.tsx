import React from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { footLinks, policyFooter } from '../../context/Navigation/Footer'

const Footer = () => {
    return (
        <div className='bg-grayBack py-16 lg:py-24'>
            <div className='px-4 max-w-6xl 2xl:max-w-7xl mx-auto '>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-1'>
                        <div className="">
                            <Link href="/" passHref>
                                <a className='flex items-end justify-start'>
                                    <h1 className='text-blackPrimary text-2xl sm:text-3xl font-extrabold'>Younggeks</h1>
                                    <span className='text-blackPrimary2 text-sm sm:text-base ml-2'>Inc</span>
                                </a>
                            </Link>
                            <p className='text-blackPrimary2 leading-[25px] text-sm max-w-md sm:my-10 mt-8'>
                                Lorem ipsum dolor sit amet, consectetur adispiscing elit. At elementum proin egestas turpis.
                            </p>
                        </div>
                        <hr className='inline-block sm:hidden w-full h-0.5 text-blackPrimary3 mt-8' />
                        <div className="hidden sm:inline-block">
                            <h3 className='text-black text-base lg:text-xl font-medium mb-3 lg:mb-6'>Stay connect</h3>
                            <div className='border-bluePrimary border rounded-l-md rounded-r-md w-full lg:w-[420px] flex items-center overflow-hidden'>
                                <input className='flex-1 py-1.5 text-sm lg:py-2 px-1 lg:text-lg focus:outline-none bg-transparent' type="text" name="email" id="email" placeholder='Email address' />
                                <button className='bg-bluePrimary text-white text-sm lg:text-base font-extrabold px-8 lg:px-12 py-2 lg:py-4'>Submit</button>
                            </div>
                            <div className='flex items-center space-x-4 my-4 lg:my-12'>
                                <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                                    <FaTwitter className='text-white w-4 h-4' />
                                </a>
                                <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                                    <FaLinkedinIn className='text-white w-4 h-4' />
                                </a>
                                <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                                    <FaFacebookF className='text-white w-4 h-4' />
                                </a>
                                <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                                    <FaInstagram className='text-white w-4 h-4' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='sm:flex sm:items-start sm:justify-between lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-16'>
                        {footLinks.map((nav, index) => (
                            <div key={index} className='pb-8 sm:pb-0'>
                                <h3 className='text-blackPrimary font-extrabold text-lg mb-6 relative inline-block'>
                                    {nav.title}
                                    <div className="absolute top-0 right-0 -translate-y-1/4 h-[32px] w-[34px] bg-[#007AFF0F] rounded-tl-md rounded-tr-2xl rounded-bl-md rounded-br-md translate-x-1/2">{' '}</div>
                                </h3>
                                <div className='grid grid-cols-2 xs:grid-cols-3 gap-4 sm:flex sm:flex-col sm:items-start sm:space-y-6'>
                                    {nav.links.map((link, index) => (
                                        <Link key={index} href={link.href} passHref>
                                            <a className='text-blackPrimary2 text-sm lg:text-base'>
                                                {link.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <hr className='inline-block sm:hidden w-full h-0.5 text-blackPrimary3 mt-8' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="inline-block sm:hidden w-full">
                    <h3 className='text-black text-base lg:text-xl font-medium mb-3 lg:mb-6'>Stay connect</h3>
                    <div className='border-bluePrimary border rounded-l-md rounded-r-md w-full lg:w-[420px] flex items-center overflow-hidden'>
                        <input className='flex-1 py-1.5 text-sm lg:py-2 px-1 lg:text-lg focus:outline-none bg-transparent' type="text" name="email" id="email" placeholder='Email address' />
                        <button className='bg-bluePrimary text-white text-sm lg:text-base font-extrabold px-8 lg:px-12 py-2 lg:py-4'>Submit</button>
                    </div>
                    <div className='flex items-center space-x-4 my-4 lg:my-12'>
                        <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                            <FaTwitter className='text-white w-4 h-4' />
                        </a>
                        <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                            <FaLinkedinIn className='text-white w-4 h-4' />
                        </a>
                        <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                            <FaFacebookF className='text-white w-4 h-4' />
                        </a>
                        <a href="#" className='bg-bluePrimary p-2 rounded-full'>
                            <FaInstagram className='text-white w-4 h-4' />
                        </a>
                    </div>
                </div>
                <hr className='hidden sm:inline-block w-full h-0.5 text-blackPrimary3 my-4 lg:my-0 lg:mb-6' />
                <div className="flex flex-col items-stretch sm:flex-col-reverse sm:items-center lg:grid lg:grid-cols-2 lg:gap-8">
                    <p className="text-blackPrimary mb-4 sm:mb-0 mt-4 lg:mt-0 text-xs lg:text-sm">&copy; Copyright 2022. All rightRights Reserved</p>
                    <div className='grid grid-cols-3 gap-4 sm:space-x-4 lg:space-x-0 sm:flex sm:items-center sm:justify-between'>
                        {policyFooter.map((link, index) => (
                            <Link key={index} href={link.href} passHref>
                                <a className='text-xs lg:text-xs xl:text-sm text-blackPrimary font-medium'>
                                    {link.name}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer