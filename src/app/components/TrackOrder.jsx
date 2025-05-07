"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const TrackOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);
  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Programmatically trigger form submission
    }
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="lg:text-3xl text-2xl font-bold  text-brand-secondary">
        Track Order
      </h1>
      <div className="bg-brand-darkGray p-4 mt-6 rounded-lg lg:w-[45vw] w-full lg:h-[200px] h-[250px]">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:flex-row flex-col items-center justify-center mx-auto lg:space-x-4">
            <div className="relative lg:w-92 w-full">
              <label className="absolute left-2 top-1 text-brand-secondary text-sm">
                Phone Number (03XXXXXXXXX)
              </label>
              <input
                type="tel"
                placeholder=""
                className={`bg-brand-lgInp mb-2 h-14 lg:w-92 w-full rounded-t-xl border-b-2 ${
                  errors.phoneNumber
                    ? "border-brand-primary focus:border-brand-primary"
                    : "border-brand-secondary focus:border-brand-primary"
                } focus:outline-none px-2 pt-6 text-md text-brand-secondary`}
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^03[0-9]{9}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {/* Display Validation Message */}
              {errors.phoneNumber && (
                <p className="text-brand-primary text-sm ">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="relative w-full lg:mt-0 mt-2  lg:w-92 text-brand-secondary">
              <input
                type="text"
                placeholder=" "
                className={`bg-brand-lgInp mb-2 h-14 w-full rounded-t-xl border-b-2 ${
                  errors.orderid
                    ? "border-brand-primary focus:border-brand-primary"
                    : "border-brand-secondary focus:border-brand-primary"
                } focus:outline-none px-2 pt-6 text-md placeholder-transparent`}
                {...register("orderid", {
                  required: "Order ID is required",
                  pattern: {
                    value: /^[0-9]{6}$/, // Only 6 digits
                    message: "Order ID must be exactly 6 digits long",
                  },
                })}
              />
              <label className="absolute left-2 text-brand-secondary text-md">
                ORDERID
              </label>

              {/* Display Validation Message */}
              {errors.orderid && (
                <p className="text-brand-primary text-sm ">
                  {errors.orderid.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mx-auto mt-8 text-brand-secondary text-xl">
            <button
              type="button"
              onClick={handleButtonClick} // Trigger form submission
              className="bg-brand-primary w-56 rounded-lg py-2 text-white"
            >
              Track
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
