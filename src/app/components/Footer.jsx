import Link from "next/link";
import React from "react";
import { RiYoutubeFill, RiInstagramLine, RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-brand-darkGray font-ftr py-14">
        <div className="container mx-auto px-4">
          {/* Logo and Social Links */}
          <div className="flex justify-center items-center space-x-14">
           <Link href="/">
           <span className="text-brand-primary font-extrabold !font-logo text-4xl ">
              YUM'S
            </span>
           </Link>
           
            <div className="flex gap-3">
              <Link
                href="/"
                className="bg-white p-2 rounded-full text-brand-primary"
              >
                <RiYoutubeFill className="text-3xl" />
              </Link>
              <Link href="/" className="bg-white p-2 rounded-full">
                <RiInstagramLine className="text-3xl" />
              </Link>
              <Link
                href="/"
                className="bg-white p-2 rounded-full text-blue-600"
              >
                <RiFacebookFill className="text-3xl" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid p-3 text-lg grid-cols-1 md:grid-cols-4 mt-6">
            <div className=" flex flex-col lg:items-center ">
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/aboutus" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Mitao Bhook
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col lg:items-center align-top ">
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/contactus" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link href="/trackorder" className="hover:underline">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col lg:items-center ">
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/termscon" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" flex flex-col ">
              <Link href="/">
                <img
                  src="/images/appstore.png"
                  alt="app-store"
                  className="mt-3 w-32 h-auto"
                />
              </Link>
              <Link href="/">
                <img
                  src="/images/playstore.png"
                  alt="play-store"
                  className="mt-3 w-32 h-auto"
                />
              </Link>
            </div>
          </div>
          <div className="mt-2 text-white text-md lg:px-12 flex justify-between flex-col lg:flex-row md:flex-row ">
            <p className="m-0">2025 YUM'S. All rights reserved</p>
            <div>
              <h1 className="text-brand-primary font-logo font-semibold">
                Powered by
              </h1>
              <Link href="https://www.webaura.site/" className="  underline">
                WebAura
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
