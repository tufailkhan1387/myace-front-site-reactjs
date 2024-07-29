import React from "react";
import { BiMobile } from "react-icons/bi";
import { FaCartFlatbed, FaCartPlus, FaLuggageCart } from "react-icons/fa";
import { RiLuggageCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <>
            <header className="absolute w-full z-[999] primary bg-themeOrange">
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
            {/* Banner start here  */}

            <section className="py-36 w-4/5 mx-auto">
                <h1 className="text-3xl font-bold text-center my-8">Terms and Conditions</h1>
                <article>
                    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
                    <p>
                        These terms and conditions govern your use of Myace, a food and grocery delivery service. By accessing or using the app, you agree to be bound by these terms.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">User Account</h2>
                    <p>
                        To use our service, you must register for an account providing accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Service Conditions</h2>
                    <p>
                        We reserve the right to refuse service to anyone for any reason at any time. The contents of the service, such as text, graphics, images, etc., are for informational purposes only.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Ordering and Payments</h2>
                    <p>
                        When placing an order, you agree to the purchase terms and prices outlined at checkout. We accept various forms of payment as specified at checkout.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Delivery</h2>
                    <p>
                        Delivery times may vary based on location and other factors. We will make every effort to deliver your order within the estimated timeframe, but delivery times are not guaranteed.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Cancellations and Refunds</h2>
                    <p>
                        You may cancel your order subject to specific conditions. Refunds are processed based on the status of the order and the terms of our refund policy.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Intellectual Property</h2>
                    <p>
                        All content included on the app, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the app, is the property of [Your App Name] or its suppliers and protected by copyright and intellectual property laws.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Disclaimer of Warranties; Limitation of Liability</h2>
                    <p>
                        We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Changes to Terms</h2>
                    <p>
                        We reserve the right to update, change or replace any part of these Terms and Conditions by posting updates and changes to our app. It is your responsibility to check our app periodically for changes.
                    </p>
                </article>
            </section>






            {/* footer start here  */}
            <footer className="bg-[#3A4052] sm:py-12 py-4 space-y-6">
                <section className="lg:w-4/5 md:w-11/12 w-4/5 m-auto grid md:grid-cols-4 sm:grid-cols-2 sm:gap-y-0 gap-y-8">
                    <div className="space-y-6">
                        <div>
                            <img src="images/logo2.webp" alt="footer-logo" className="w-40" />
                        </div>
                        <h2 className="text-white font-medium text-xl">About My Ace</h2>
                        <ul className="text-white text-opacity-70 font-normal text-sm space-y-4">
                            <li>Who we are</li>
                            <li>FAQ’s</li>
                            <li>Loactions</li>
                            <li>Quality Assurance</li>
                            <li>CRM Development</li>
                        </ul>
                    </div>
                    <div className="space-y-6 sm:mt-[88px]">
                        <h2 className="text-white font-medium text-xl">
                            For Professionals
                        </h2>
                        <ul className="text-white text-opacity-70 font-normal text-sm space-y-4">
                            <li>
                                <a href="https://myace.app/admin/login_store">
                                    Become a partner
                                </a>
                            </li>
                            <li>Drive with us</li>
                            <li>
                                <a href="https://myace.app/admin/login_store">Register now</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6 sm:mt-[88px]">
                        <h2 className="text-white font-medium text-xl">Learn More</h2>
                        <ul className="text-white text-opacity-70 font-normal text-sm space-y-4">
                            <li>
                                <Link to="/privacy">
                                    <u>Privacy Policy</u>
                                </Link>
                            </li>
                            <li>Help & Support</li>
                            <li>
                                <Link to="/terms">
                                    <u>Terms of Use</u>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="h-16 flex items-center gap-x-4 text-white">
                            <a href="javascript:void()">
                                <i className="fa-brands fa-2x fa-facebook-f"></i>
                            </a>
                            <a href="javascript:void()">
                                <i className="fa-brands fa-2x fa-twitter"></i>
                            </a>
                            <a href="javascript:void()">
                                <i className="fa-brands fa-2x fa-instagram-square"></i>
                            </a>
                            <a href="javascript:void()">
                                <i className="fa-brands fa-2x fa-youtube"></i>
                            </a>
                        </div>
                        <h2 className="text-white font-medium text-xl">Login</h2>
                        <div>
                            <button
                                className="lg:bg-white bg-themeOrange p-3 font-normal text-base lg:text-black text-white 
                        rounded flex items-center justify-center gap-x-2 h-12 border-[1px] border-white"
                            >
                                <i className="fa-regular fa-user-circle lg:text-themeOrange text-lg"></i>
                                <span>Login/Signup</span>
                            </button>
                        </div>
                    </div>
                </section>
                <p className="my-0 text-center text-white font-normal text-sm w-4/5 sm:w-11/12 mx-auto">
                    Copyright &copy; 2022 MyAce. All Rights Reserved. |{" "}
                    <Link to="/privacy">
                        <u>Privacy Policy</u>
                    </Link>
                    |{" "}
                    <Link to="/terms">
                        <u>Terms of Use</u>
                    </Link>
                </p>
            </footer>
        </>
    );
}
