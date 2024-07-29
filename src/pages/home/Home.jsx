import React from "react";
import { BiMobile } from "react-icons/bi";
import { FaCartFlatbed, FaCartPlus, FaLuggageCart } from "react-icons/fa";
import { RiLuggageCartFill } from "react-icons/ri"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="absolute w-full z-[999] primary">
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
      <section
        className="bg-themeOrange bg-[url('/public/images/sec1-bg.webp')] bg-contain bg-no-repeat bg-right sm:px-12 px-4 
        lg:py-72 md:py-52 sm:py-40 py-32 relative lg:before:hidden before:content-[''] before:absolute before:w-full 
        before:h-full before:bg-black before:bg-opacity-30 before:top-0 before:left-0 space-y-6 [&>*]:relative"
      >
        <h1 className="m-0 font-semibold sm:text-5xl text-4xl text-white tracking-tight">
          The best food, delivered to your doorstep
        </h1>
        <div className="flex gap-x-2">
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.sigitechnologies.myaceupdated&hl=en&gl=US"
              target="/"
            >
              <img src="images/google.webp" alt="" className="w-44" />
            </a>
          </div>
          <div>
            <a href="https://apps.apple.com/us/app/myace-app/id6444856601" target="/">
              <img src="images/apple.webp" alt="" className="w-44" />
            </a>
          </div>
        </div>
      </section>
      {/* Ride Section starts here  */}
      <section className="mt-12">
        <section
          className="lg:w-3/4 sm:w-4/5 w-11/12 m-auto border-[3px] border-themeOrange rounded-lg h-96 
            bg-[url('/public/images/car.webp')] bg-cover bg-no-repeat bg-center relative before:content-[''] 
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black 
            before:bg-opacity-70 before:rounded flex flex-col justify-center items-center gap-y-5 [&>*]:relative 
            sm:px-10 px-6"
        >
          <h1 className="m-0 font-semibold sm:text-5xl text-4xl text-white tracking-tight text-center">
            The best cab service, right at your doorstep
          </h1>
          <p className="m-0 font-normal sm:text-xl text-lg text-white tracking-tight text-center">
            You book or schedule your ride through the app at any time, by
            clicking on the link below.
          </p>
          <div>
            <button
              className="text-white font-medium text-xl bg-themeOrange px-6 py-2 rounded border-[1px]
                    border-themeOrange hover:bg-white hover:text-themeOrange hover:border-white"
            >
              Book a Ride
            </button>
          </div>
        </section>
      </section>
      {/* Ride Section ends here  */}

      {/*  2nd Section starts here  */}
      <section className="lg:py-20 py-12 lg:w-3/4 sm:w-4/5 w-11/12 m-auto grid grid-cols-12 gap-5">
        <div
          className="sm:col-span-6 col-span-12 h-44 bg-[url('/public/images/sec2-bg1.webp')] bg-cover rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            Italian
          </h4>
        </div>
        <div
          className="sm:col-span-6 col-span-12 h-44 bg-[url('/public/images/sec2-bg2.webp')] bg-cover rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            Fast Food
          </h4>
        </div>
        <div
          className="col-span-12 md:h-80 sm:h-64 h-44 bg-[url('/public/images/sec2-bg3.webp')] bg-cover bg-no-repeat bg-center rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            African Special
          </h4>
        </div>
        <div
          className="md:col-span-4 sm:col-span-6 col-span-12 md:h-64 h-44 bg-[url('/public/images/sec2-bg4.webp')] bg-cover rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            Pakistani
          </h4>
        </div>
        <div
          className="md:col-span-4 sm:col-span-6 col-span-12 md:h-64 h-44 bg-[url('/public/images/sec2-bg5.webp')] bg-cover rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            Indian
          </h4>
        </div>
        <div
          className="md:col-span-4 col-span-12 md:h-64 h-44 bg-[url('/public/images/sec2-bg6.webp')] bg-cover rounded-lg relative 
            before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-40 
            before:top-0 before:left-0 before:rounded-lg"
        >
          <h4 className="m-0 text-[#F5F6FD] text-4xl font-semibold absolute z-10 left-6 bottom-6">
            Chinese
          </h4>
        </div>
      </section>
      {/* 2nd Section ends here  */}

      {/*  3rd Section starts here  */}
      <section className="bg-[#FFD7CE]">
        <section className="lg:w-3/4 w-11/12 m-auto grid md:grid-cols-3 gap-y-8">
          <div className="flex flex-col gap-y-4 justify-center md:my-40 md:order-1 order-2">
            <h1 className="m-0 font-semibold text-4xl">
              Good food within minutes
            </h1>
            <p className="m-0 font-normal text-xl text-black text-opacity-60">
              Order from your favoruites restaurants & track on the go with
              MyAce app.
            </p>
            <div className="flex gap-x-2">
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sigitechnologies.myaceupdated&hl=en&gl=US"
                  target="/"
                >
                  <img src="images/google.webp" alt="google" className="w-40" />
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/myace-app/id6444856601" target="/">
                  <img src="images/apple.webp" alt="apple" className="w-40" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center md:order-2 order-1">
            <div>
              <img
                src="images/sec3-img1.webp"
                className="xl:w-80 w-64 md:h-auto h-64 object-contain"
                alt="sec-3"
              />
            </div>
          </div>
          <div className="flex items-end justify-center order-3">
            <div>
              <img
                src="images/sec3-img2.webp"
                alt=""
                className="xl:w-80 w-64 md:h-auto h-64 object-contain"
              />
            </div>
          </div>
        </section>
      </section>
      {/*  3rd Section ends here  */}

      {/*  4th Section starts here  */}
      <section className="sm:py-12 py-8">
        <section className="lg:w-4/5 w-11/12 m-auto space-y-12 [&>section]:border-2">
          <section className="grid md:grid-cols-2 gap-y-8">
            <div className="clip-path-right">
              <img
                src="images/sec4-img1.webp"
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-y-4 xl:px-20 lg:px-12 sm:px-8 px-2">
              <h1 className="m-0 font-semibold sm:text-4xl text-3xl">
                Instant Deliveries
              </h1>
              <p className="m-0 font-normal sm:text-xl text-lg text-black text-opacity-40">
                You have the option to order you groceries and food delivered or
                option to pick it up. Order now
              </p>
              <div>
                <button
                  className="bg-themeOrange text-white font-normal sm:text-xl text-lg px-6 py-2 rounded border-[1px] 
                            border-themeOrange hover:bg-transparent hover:text-themeOrange"
                >
                  Order Now
                </button>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 gap-y-8">
            <div className="flex flex-col justify-center gap-y-4 xl:px-20 lg:px-12 sm:px-8 px-2 md:order-1 order-2">
              <h1 className="m-0 font-semibold sm:text-4xl text-3xl">
                Track on the Go
              </h1>
              <p className="m-0 font-normal sm:text-xl text-lg text-black text-opacity-40">
                You can track movement of your food, groceries, taxi Live on
                using the track on the Go in our app. Instant update every
                second of the movement update
              </p>
              <div>
                <button
                  className="bg-themeOrange text-white font-normal sm:text-xl text-lg px-6 py-2 rounded border-[1px] 
                            border-themeOrange hover:bg-transparent hover:text-themeOrange"
                >
                  Find Food
                </button>
              </div>
            </div>
            <div className="clip-path-left md:order-2 order-1">
              <img
                src="images/sec4-img2.webp"
                alt=""
                className="h-full object-cover"
              />
            </div>
          </section>
        </section>
      </section>
      {/*  4th Section ends here  */}

      {/*  5th Section starts here  */}
      <section className="sm:py-12 py-8">
        <section className="xl:w-3/5 lg:w-4/5 md:w-11/12 sm:w-4/5 w-11/12 m-auto grid md:grid-cols-2 gap-x-6 gap-y-6">
          <div
            className="bg-[url('/public/images/sec5-img1.webp')] bg-cover sm:h-[440px] h-96 flex flex-col justify-end 
                sm:gap-y-4 gap-y-2 rounded-lg sm:px-4 px-3 sm:py-6 py-4 relative before:content-[''] 
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black 
                before:rounded-lg before:bg-opacity-40 [&>*]:relative"
          >
            <h1 className="m-0 font-semibold sm:text-4xl text-3xl text-white">
              Partner with us
            </h1>
            <p className="m-0 font-normal sm:text-base text-sm text-white">
              You can partner with us by signing up your business, stores,
              rides, click on the link below to register your and connect with
              us
            </p>
            <div>
              <button
                className="bg-themeOrange text-white font-normal sm:text-xl text-base px-6 py-2 rounded 
                        border-[1px] border-themeOrange hover:bg-white hover:text-themeOrange hover:border-white"
              >
                Get Started
              </button>
            </div>
          </div>
          <div
            className="bg-[url('/public/images/sec5-img2.webp')] bg-cover sm:h-[440px] h-96 flex flex-col justify-end 
                sm:gap-y-4 gap-y-2 rounded-lg sm:px-4 px-3 sm:py-6 py-4 relative before:content-[''] 
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black 
                before:rounded-lg before:bg-opacity-40 [&>*]:relative"
          >
            <h1 className="m-0 font-semibold sm:text-4xl text-3xl text-white">
              Ride with us
            </h1>
            <p className="m-0 font-normal sm:text-base text-sm text-white">
              Are you a driver, do you want to deliver, you can make
              unbelievable rides within an hour. Make more money by picking more
              rides and deliveries. Click on get started. (Connect it drivers
              Store part Myace drivers)
            </p>
            <div>
              <button
                className="bg-themeOrange text-white font-normal sm:text-xl text-base px-6 py-2 rounded 
                        border-[1px] border-themeOrange hover:bg-white hover:text-themeOrange hover:border-white"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </section>
      {/* 5th Section ends here  */}

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
          <a href="{{route('privacy')}}">
            <u>Privacy Policy</u>
          </a>
          |{" "}
          <a href="{{route('terms')}}">
            <u>Terms of Use</u>
          </a>
        </p>
      </footer>
    </>
  );
}
