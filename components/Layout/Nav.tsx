import React, { Fragment } from 'react'
import Link from 'next/link'
import { topNav } from '../../context/Navigation/TopNav'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { CgMenuRight, CgClose } from 'react-icons/cg'

const Nav = () => {
    return (
        <div className='max-w-6xl bg-white mx-auto px-4 2xl:max-w-7xl flex items-center justify-between xl:justify-start py-4 sm:py-6 relative z-50 shadow-sm'>
            <Link href="/" passHref>
                <a className='flex items-end justify-start'>
                    <h1 className='text-blackPrimary text-2xl sm:text-3xl font-extrabold'>Younggeks</h1>
                    <span className='text-blackPrimary2 text-sm sm:text-base ml-2'>Inc</span>
                </a>
            </Link>
            <Menu as='div' className='inline-block z-50 lg:hidden'>
                {({ open }) => (
                    <>
                        <Menu.Button className="text-blackPrimary3 flex items-center space-x-2">
                            {!open ? (
                                <CgMenuRight className={`w-7 h-7 text-current`} />
                            ) : (
                                <CgClose className={`w-7 h-7 text-current`} />
                            )}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            enter='transition duration-200'
                            leave='transition duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacety-0'
                        >
                            <Menu.Items className='absolute left-0 top-full z-50 w-full px-4 border-y py-6 space-y-4 bg-white'>
                                <div className="flex flex-col space-y-8 w-full">
                                    <div className='space-y-8'>
                                        {topNav.map((nav, index) => (
                                            <>
                                                {nav.link ? (
                                                    <Link key={index} href={`${nav.href}`} passHref>
                                                        <a className='flex text-blackPrimary items-end justify-start'>
                                                            {nav.name}
                                                        </a>
                                                    </Link>
                                                ) : (
                                                    <Menu key={index} as='div' className='relative'>
                                                        {({ open }) => (
                                                            <>
                                                                <Menu.Button className="text-blackPrimary flex items-center justify-between w-full space-x-2">
                                                                    <span>
                                                                        {nav.name}
                                                                    </span>
                                                                    <BsChevronDown className={`w-4 h-4 text-current duration-200 ${open ? 'rotate-180' : 'rotate-0'}`} />
                                                                </Menu.Button>
                                                                <Transition
                                                                    enterFrom='opacity-0'
                                                                    enterTo='opacity-100 translate-y-0'
                                                                    enter='transition duration-200'
                                                                    leave='transition duration-200'
                                                                    leaveFrom='opacity-100 translate-y-0'
                                                                    leaveTo='opacety-0'
                                                                >
                                                                    <Menu.Items className='relative left-0 w-full px-4 sm:px-6 py-6 rounded space-y-4 border-y my-2 bg-grayBack'>
                                                                        {nav.children && nav.children.map((links, index) => (
                                                                            <Menu.Item key={index}>
                                                                                <Link href={`${links.link}`} passHref>
                                                                                    <div>
                                                                                        <a
                                                                                            className='text-bluePrimary  text-md'
                                                                                        >
                                                                                            {links.name}
                                                                                        </a>
                                                                                        <p className='text-blackPrimary2 text-sm mt-2'>{links.description}</p>
                                                                                    </div>
                                                                                </Link>
                                                                            </Menu.Item>
                                                                        ))}
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Menu>
                                                )}
                                            </>
                                        ))}
                                    </div>
                                    <div className='flex lg:hidden space-y-4 w-full flex-col items-center'>
                                        <button className='w-full text-white border border-bluePrimary bg-bluePrimary font-bold px-8 py-2 rounded-lg'>Get started</button>
                                        <button className='py-2 w-full text-blackPrimary font-medium'>Login</button>
                                    </div>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
            <div className='hidden lg:flex space-x-6 xl:ml-20 xl:mr-auto'>
                {topNav.map((nav, index) => (
                    <>
                        {nav.link ? (
                            <Link key={index} href={`${nav.href}`} passHref>
                                <a className='flex text-blackPrimary3 items-end justify-start'>
                                    {nav.name}
                                </a>
                            </Link>
                        ) : (
                            <Menu key={index} as='div' className='relative'>
                                {({ open }) => (
                                    <>
                                        <Menu.Button className="text-blackPrimary3 flex items-center space-x-2">
                                            <span>
                                                {nav.name}
                                            </span>
                                            <BsChevronDown className={`w-4 h-4 text-current duration-200 ${open ? 'rotate-180' : 'rotate-0'}`} />
                                        </Menu.Button>
                                        <Transition
                                            enterFrom='opacity-0 scale-0'
                                            enterTo='opacity-100 scale-100'
                                            enter='transition duration-200'
                                            leave='transition duration-200'
                                            leaveFrom='opacity-100 scale-100'
                                            leaveTo='opacety-0 scale-0'
                                        >
                                            <Menu.Items className='absolute left-1/2 -translate-x-1/2 top-full mt-6 w-96 top-trie shadow-top px-8 py-6 rounded space-y-4'>
                                                {nav.children && nav.children.map((links, index) => (
                                                    <Menu.Item key={index}>
                                                        <Link href={`${links.link}`} passHref>
                                                            <div>
                                                                <a
                                                                    className='text-bluePrimary  text-md'
                                                                >
                                                                    {links.name}
                                                                </a>
                                                                <p className='text-blackPrimary2 text-sm mt-2'>{links.description}</p>
                                                            </div>
                                                        </Link>
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        )}
                    </>
                ))}
            </div>
            <div className='hidden lg:inline-block space-x-8'>
                <button className='text-blackPrimary font-medium'>Login</button>
                <button className='text-white border border-bluePrimary bg-bluePrimary font-bold px-8 py-4 rounded-lg'>Get started</button>
            </div>
        </div>
    )
}

export default Nav