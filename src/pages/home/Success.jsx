import React from 'react'
import { BiMobile } from 'react-icons/bi'
import { FaCartPlus } from 'react-icons/fa'
import { RiLuggageCartFill } from 'react-icons/ri'

export default function Success() {
    return (
        <div>
            <header className="absolute bg-themeOrange w-full z-[999] primary">
                <nav>
                    <div className="flex flex-wrap items-center justify-between lg:px-16 px-5">
                        <a href="/" className="flex items-center">
                            <img src="images/logo.webp" alt="logo" className="w-40" />
                        </a>
                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm 
                text-white lg:hidden"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                        >
                            <i className="fa fa-bars fa-2x"></i>
                        </button>
                        <div
                            className="hidden w-full lg:block lg:w-auto lg:animate-none animate-navDown"
                            id="navbar-default"
                        >
                            <section
                                className="flex lg:flex-row flex-col p-4 lg:mt-0 mt-4 lg:space-x-4 lg:space-y-0 space-y-2 
                        lg:bg-transparent bg-white lg:[&>div>button]:w-auto [&>div>button]:w-full"
                            >
                                <div>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.sigitechnologies.myaceupdated&hl=en&gl=US"
                                        className="lg:bg-white bg-themeOrange p-3 font-normal text-base lg:text-black text-white 
                                rounded flex items-center justify-center gap-x-2 h-12 border-[1px] border-white"
                                    >
                                        <BiMobile />
                                        <span>Download the App</span>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://myace.app/admin/login_store"
                                        className="lg:bg-white bg-themeOrange p-3 font-normal 
                                text-base lg:text-black text-white rounded flex items-center justify-center gap-x-2 
                                h-12 border-[1px] border-white"
                                    >
                                        <FaCartPlus />
                                        <span>Become a Partner</span>
                                    </a>
                                </div>
                                <div>
                                    <button
                                        className="lg:bg-white bg-themeOrange p-3 font-normal text-base lg:text-black text-white 
                                rounded flex items-center justify-center h-12 border-[1px] border-white"
                                    >
                                        <RiLuggageCartFill />
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='flex justify-center items-center'>
                <img className='object-cover' src='images/success.gif' />
            </div>

        </div>
    )
}
