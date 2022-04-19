import React from 'react'
import Link from 'next/link'
import { topNav } from '../../context/Navigation/TopNav'
import { Menu } from '@headlessui/react'

const Nav = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 2xl:max-w-7xl flex items-center justify-between py-6'>
            <Link href="/" passHref>
                <a className='flex items-end justify-start'>
                    <h1 className='text-blackPrimary text-3xl font-extrabold'>Younggeks</h1>
                    <span className='text-blackPrimary2 ml-2'>Inc</span>
                </a>
            </Link>
            <div className='flex space-x-4'>
                {topNav.map(nav => (
                    <>
                        {nav.link ? (
                            <Link href={`${nav.href}`} passHref>
                                <a className='flex items-end justify-start'>
                                    {nav.name}
                                </a>
                            </Link>
                        ) : (
                            <Menu as='div' className='relative'>
                                <Menu.Button>{nav.name}</Menu.Button>
                                <Menu.Items className='absolute top-full mt-6'>
                                    {nav.children && nav.children.map((links, index) => (
                                        <Menu.Item key={index}>
                                            <Link href={`${links.link}`} passHref>
                                                <a
                                                    className='text-black'
                                                >
                                                    {links.name}
                                                </a>
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Menu>
                        )}
                    </>
                ))}
            </div>
            <div className='space-x-8'>
                <button className='text-blackPrimary font-medium'>Login</button>
                <button className='text-bluePrimary border border-bluePrimary font-bold px-8 py-4 rounded-lg'>Get started</button>
            </div>
        </div>
    )
}

export default Nav