import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
const Cart = () => {
  return (
    <div className="flex items-center justify-center mx-auto   h-full">
      <div className="flex relative flex-col p-4 justify-center  mt-20 rounded-lg  w-[30%] h-[100%] bg-brand-darkGray">
        <div className="border-2  flex items-center border-b-brand-secondary border-l-0 border-t-0 border-r-0">
          <Link href="/">
            <div className="absolute top-4 mb-4 left-4 bg-brand-primary text-brand-secondary p-1 rounded-full">
              <ChevronLeft />
            </div>
          </Link>
          <h2 className="text-xl mb-4 mx-10 font-bold text-brand-secondary">
            Items From Your Cart
          </h2>
        </div>
        <div className=" flex items-center justify-center mx-auto h-[280px] w-[280px]">
          <Image
            src="/images/cart.png"
            width={500}
            height={500}
            alt="cart"
            className="object-cover "
          />
        </div>
        <div className="flex items-center justify-center -mt-10">
          <h2 className="text-xl text-brand-secondary font-bold">
            You haven’t added any items in bucket yet
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <Link href="/menu">
            <button className="bg-brand-primary rounded-xl px-6 py-3 w-72 text-brand-secondary text-xl font-bold my-5">
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
