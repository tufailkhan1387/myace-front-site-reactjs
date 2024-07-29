import React from "react";
import { BiMobile } from "react-icons/bi";
import { FaCartFlatbed, FaCartPlus, FaLuggageCart } from "react-icons/fa";
import { RiLuggageCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Privacy() {
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
                <h1 className="text-3xl font-bold text-center my-8">Privacy Policy</h1>
                <article>
                    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
                    <p>
                        Welcome to our Privacy Policy page! Here at Myace, we take your privacy seriously and are committed to protecting it. This policy outlines the types of personal information we collect, how we use it, and the measures we take to ensure its security.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Information Collection</h2>
                    <p>
                        We collect information to provide better services to all of our users. This includes:
                        <ul className="list-disc ml-8">
                            <li>Basic information such as name, email address, and contact number.</li>
                            <li>Transaction details related to your orders, including payment information.</li>
                            <li>Information about how you use our services, such as the types of content you view or engage with or the frequency and duration of your activities.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Use of Information</h2>
                    <p>
                        The information we collect is used to operate and improve our services, process transactions, and communicate with you regarding your orders, new products, and services, or promotional offers.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Sharing of Information</h2>
                    <p>
                        We do not share personal information with companies, organizations, or individuals outside of [Your App Name] except in the following cases:
                        <ul className="list-disc ml-8">
                            <li>With your consent.</li>
                            <li>For legal reasons, such as to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Security</h2>
                    <p>
                        We work hard to protect Myace and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. We implement a variety of security measures including encryption and authentication tools.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Your Rights</h2>
                    <p>
                        You have the right to request access to the personal information we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data.
                    </p>

                    <h2 className="text-2xl font-bold mt-6">Changes to the Policy</h2>
                    <p>
                        We may update our Privacy Policy periodically. We will notify you of any changes by posting the new Privacy Policy on this page.
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
