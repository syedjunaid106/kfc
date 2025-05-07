"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import {
  FilledInput,
  FormControl,
  InputLabel,
  Typography,
  InputAdornment,
} from "@mui/material";

const Cart = () => {
  const [number, setNumber] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const gstRate = 0.17;
  const deliveryCharge = 50;

  const gst = subtotal * gstRate;
  const total = subtotal + gst + deliveryCharge;
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between mx-auto  w-[90vw] h-full">
      <div className="flex relative flex-col p-4 justify-center rounded-lg lg:-mt-8 mt-28  lg:w-[70%] w-[320px] h-[70%] bg-brand-darkGray">
        <div className="  flex items-center border-b-2 border-brand-secondary">
          <Link href="/">
            <div className="absolute top-4 mb-4 left-4 bg-brand-primary text-brand-secondary p-1 rounded-full">
              <ChevronLeft />
            </div>
          </Link>
          <h2 className="lg:text-xl text-lg mb-4 mx-10 font-login font-bold text-brand-secondary">
            Items From Your Cart
          </h2>
        </div>
        <div className=" flex items-center justify-center mx-auto lg:h-[280px] lg:w-[280px] h-[220px] w-[220px]">
          <Image
            src="/images/fastfood.png"
            width={500}
            height={500}
            alt="cart"
            className="object-cover "
          />
        </div>
        <div className="flex items-center justify-center ">
          <h2 className="lg:text-xl text-lg text-center font-ftr text-brand-secondary font-bold">
            You haven’t added any items in bucket yet
          </h2>
        </div>
        <div className="flex items-center justify-center mx-auto">
          <Link href="/menu">
            <button className="bg-brand-primary font-ftr rounded-xl px-6 lg:py-3 py-2 lg:w-72 w-60 text-brand-secondary lg:text-xl text-lg font-bold my-5">
              Explore Menu
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center font-ftr  justify-center lg:mt-20 my-10 lg:my-0  lg:mx-4 ">
        <div className="bg-brand-darkGray p-4 rounded-lg lg:w-[400px] w-[320px]">
          <h1 className="text-xl text-brand-secondary font-bold  border-b-2 border-brand-primary">
            0 Items Added
          </h1>
          <div className="mt-3 flex flex-col bg-brand-accent rounded-lg mx-1 p-2">
            <h3 className="text-brand-secondary lg:text-lg text-md mx-2">
              Special Instructions (Optional)
            </h3>
            <div className=" rounded-lg">
              <textarea
                name=""
                id=""
                placeholder="Additional instructions"
                className="text-brand-secondary bg-brand-darkGray w-full p-2 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              ></textarea>
            </div>
            <FormControl variant="filled" error fullWidth>
              <InputLabel
                className="!text-brand-secondary"
                shrink
                htmlFor="outlined-number"
              >
                Alternate Phone Number (3XXXXXXXXX)
              </InputLabel>
              <FilledInput
                id="outlined-number"
                name="input1"
                type="tel"
                autoComplete="mobile tel"
                value={number}
                disableUnderline
                onChange={(e) => {
                  const inputValue = e.target.value; // Remove non-numeric characters
                  if (
                    !isNaN(inputValue) &&
                    inputValue.startsWith("3") &&
                    inputValue.length <= 10
                  ) {
                    setNumber(inputValue);
                  } else if (!isNaN(inputValue) && inputValue == 3) {
                    setNumber(inputValue);
                  }
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Typography
                      className="text-brand-secondary border-e-2 font-semibold ms-1"
                      variant="body1"
                    >
                      +92&nbsp;&nbsp;
                    </Typography>
                  </InputAdornment>
                }
                className="text-brand-secondary border-b-[0.1rem] ps-[0.5rem] mt-3 border-white active:border-red-700 hover:border-black "
              />
            </FormControl>
          </div>
          <div className="mt-3 flex flex-col bg-brand-accent rounded-lg mx-1 p-2">
            <h2 className="lg:text-3xl font-login text-2xl text-center text-brand-secondary font-bold">
              Your Order
            </h2>
            <div className="flex justify-between text-lg text-brand-secondary mx-4 my-4">
              <span className="">Sub Total:</span>
              <span>Rs. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mx-4 lg:text-lg text-md text-brand-secondary">
              <span>Delivery Fee:</span>
              <span>Rs. {deliveryCharge.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-brand-secondary mx-4 my-4 text-md lg:text-lg">
              <span>GST (17%):</span>
              <span>Rs. {gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-brand-secondary mx-4 lg:text-xl text-lg font-bold border-t-2 border-brand-secondary pt-3">
              <span>Total:</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5  justify-center mx-auto">
            <button className="bg-brand-primary w-full lg:py-3 py-2 rounded-lg text-xl text-brand-secondary font-bold ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
