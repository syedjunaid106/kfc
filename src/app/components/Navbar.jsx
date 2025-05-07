"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  ChartNoAxesGantt,
  ShoppingBag,
  PackageSearch,
  Logs,
  MapPinHouse,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import CustomDialog from "./DeliveryBtn";
import PickupBtn from "./PickupBtn";
const Navbar = () => {
  const navLinks = [
    { name: "About Us", path: "/aboutus" },
    { name: "FeedBack", path: "/feedback" },
    { name: "Terms & Conditions", path: "/termscon" },
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Mitao Bhook", path: "#" },
    { name: "Careers", path: "/careers-page" },
  ];
  const expOptions = [
    { name: "Store Locator", path: "#", icon: <MapPinHouse size={20} /> },
    {
      name: "Track Order",
      path: "/trackorder",
      icon: <PackageSearch size={20} />,
    },
    { name: "Explore Menu", path: "/menu", icon: <Logs size={20} /> },
  ];
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 shadow-md bg-brand-accent  lg:h-24 w-full lg:flex items-center py-2 lg:py-0 ">
      <div className="container flex items-center justify-between w-[90vw] mx-auto">
        <div className="flex items-center ">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <ChartNoAxesGantt
                size={38}
                className="text-brand-secondary"
              />
            </SheetTrigger>
            <SheetContent className="overflow-auto font-login">
              <div className=" p-3">
                <Link href="/login">
                <button className="bg-brand-primary px-3 py-3 rounded-md text-brand-secondary font-semibold ">
                  LOGIN
                </button>
                </Link>
                
              </div>
              <div className="flex justify-end">
                <Switch />
              </div>
              <div className="flex flex-col space-y-6 p-3 text-brand-secondary border-t-[1px] my-5 border-gray-500">
                {expOptions.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="flex items-center text-md text-brand-secondary mt-5"
                      onClick={() => setIsSheetOpen(false)} 
                    >
                      <div className="bg-brand-primary p-1">{link.icon}</div>
                      <span className="mx-2">{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col p-3 space-y-6 text-brand-secondary border-t-[1px] mt-5 border-gray-500 ">
                {navLinks.map((link) => {
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="text-md text-brand-secondary mt-5"
                      onClick={() => setIsSheetOpen(false)} 

                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex flex-grow items-center justify-center">
            <Link href="/">
              <span className="text-brand-primary font-extrabold text-4xl lg:mx-5">
                YUM'S
              </span>
            </Link>
          </div>
          <div className="lg:flex hidden mx-6 space-x-3">
            {/* <button className='bg-brand-darkGray focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2'>
              <Image
                src='/images/Delivery.png'
                alt='Deliver'
                width={30}
                height={30}
              />
              <span className='font-bold'>DELIVERY</span>
            </button> */}
            <CustomDialog />
            {/* <button className='bg-brand-darkGray font-ftr focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2'>
              <Image
                src='/images/pickup.png'
                alt='Deliver'
                width={30}
                height={30}
              />{' '}
              <span className='font-bold'>PICK UP</span>
            </button> */}
            <PickupBtn />
          </div>
        </div>
        <div className="flex items-center ml-auto lg:ml-0">
          <Link href="/" className="lg:hidden">
            <span className="text-brand-primary font-extrabold text-2xl ">
              YUM'S
            </span>
          </Link>
          <Link href="/bucket">
            <ShoppingBag
              className="text-brand-primary mx-6 hidden lg:block"
              size={35}
            />
          </Link>
          <Link href="/login">
            <button className="bg-brand-primary px-4 py-2 h-10 rounded-md text-brand-secondary font-bold hidden lg:block font-login text-x">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center  space-x-2">
        {/* <button className='bg-brand-darkGray focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2'>
              <Image
                src='/images/Delivery.png'
                alt='Deliver'
                width={30}
                height={30}
              />
              <span className='font-bold'>DELIVERY</span>
            </button> */}
        <CustomDialog />
        {/* <button className='bg-brand-darkGray font-ftr focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2'>
              <Image
                src='/images/pickup.png'
                alt='Deliver'
                width={30}
                height={30}
              />{' '}
              <span className='font-bold'>PICK UP</span>
            </button> */}
        <PickupBtn />

        <div className=" flex items-center justify-end">
          <Link href="/bucket">
            <ShoppingBag className="text-brand-primary " size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
