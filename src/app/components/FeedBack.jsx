"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { useState, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarDays as CalendarIcon } from "lucide-react";
const FeedBack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date
  const formRef = useRef(null);

  const onSubmit = (data) => {
    data.selectedDate = selectedDate;
    console.log("Form Data Submitted: ", data);
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // Programmatically trigger form submission
    }
  };

  return (
    <div className=" lg:mt-28 mt-32">
      <h3 className="text-brand-secondary text-center lg:text-4xl font-login text-2xl font-bold">
        Have Some Feedback To Share?
      </h3>
      <h3 className="text-brand-primary text-center font-ftr lg:text-2xl text-xl my-2">
        Well, you&apos;ve come to the right place!
      </h3>
      <p className="text-brand-secondary text-lg lg:w-[60%]  lg:mx-auto font-ftr   text-center">
        Fill in the sections below and we&apos;ll be in touch soon, or if you want to
        contact a specific store, visit our locations page for store contact
        details. * indicates a required answer
      </p>

      <div className="flex flex-col mt-10 lg:flex-row lg:justify-between lg:space-x-4 items-center">
        <div className="bg-brand-darkGray p-4 w-[95vw] lg:w-[50%] rounded-xl">
          <h2 className="lg:text-2xl font-login text-xl text-brand-secondary font-bold">
            Contact Details
          </h2>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex lg:flex-row font-ftr flex-col items-center mt-2 justify-between mx-auto">
              <div className="relative lg:w-64 w-full text-brand-secondary">
                <label className="flex absolute left-2 text-brand-secondary text-md">
                  FULL NAME
                </label>
                <input
                  type="text"
                  placeholder=" "
                  className={`bg-brand-lgInp mb-4 h-14 w-full rounded-t-xl border-b-2 ${
                    errors.firstName
                      ? "border-brand-primary focus:border-brand-primary"
                      : "border-brand-secondary focus:border-brand-primary"
                  } focus:outline-none px-2 pt-6 text-md focus:border-brand-primary placeholder-transparent`}
                  {...register("firstName", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/, // Only alphabets and spaces
                      message: "Only alphabets are allowed",
                    },
                  })}
                />

                {/* Display Validation Message */}
                {errors.firstName && (
                  <p className="text-brand-primary text-sm -mt-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="relative lg:w-64 w-full">
                <label className="absolute left-2 top-1 text-brand-secondary text-sm">
                  Phone Number (03XXXXXXXXX)
                </label>
                <input
                  type="tel"
                  placeholder=""
                  className={`bg-brand-lgInp mb-2 h-14 lg:w-64 w-full rounded-t-xl border-b-2 ${
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
            </div>
            <div className="relative font-ftr w-full text-brand-secondary">
              <label className="flex absolute left-2  text-brand-secondary text-md ">
                EMAIL
              </label>
              <input
                type="text"
                placeholder=" "
                className={` bg-brand-lgInp mb-4 h-14 w-full rounded-t-xl border-b-2 ${
                  errors.email
                    ? "border-brand-primary focus:border-brand-primary"
                    : "border-brand-secondary focus:border-brand-primary"
                } focus:outline-none px-2 pt-6 text-md text-brand-secondary placeholder-transparent`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              {/* Display Validation Message */}
              {errors.email && (
                <p className="text-brand-primary text-sm ">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col font-ftr relative w-full text-brand-secondary">
              <input
                type="text"
                placeholder=" "
                className={`bg-brand-lgInp mb-4 h-14 w-full rounded-t-xl border-b-2 ${
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
                <p className="text-brand-primary text-sm mt-1">
                  {errors.orderid.message}
                </p>
              )}
            </div>

            {/* <div className="relative w-full text-brand-secondary">
  <input
    type="text"
    placeholder=" "
    className="peer bg-brand-lgInp mb-4 h-14 w-full rounded-t-xl border-b-2 border-brand-secondary focus:outline-none px-2 pt-6 text-md focus:border-brand-primary placeholder-transparent"
    {...register("firstName", { required: true, maxLength: 20 })}
  />
  <label
    className=" flex absolute left-2  top-1/2 transform -translate-y-1/2 text-brand-secondary text-md peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-brand-secondary peer-focus:top-4 peer-focus:text-sm peer-focus:text-brand-primary transition-all"
  >
    FEEDBACK CHANNEL
  </label>
</div> */}
            <div className="relative font-ftr w-full text-brand-secondary">
              <select
                id="feedbackChannel"
                className={`bg-brand-lgInp h-14 w-full rounded-t-xl border-b-2 ${
                  errors.feedbackChannel
                    ? "border-brand-primary focus:border-brand-primary"
                    : "border-brand-secondary focus:border-brand-primary"
                } focus:outline-none px-2 pt-6 text-md`}
                {...register("feedbackChannel", {
                  required: "Feedback channel is required",
                })}
                defaultValue="" // Ensure no value is selected initially
              >
                <option value="" disabled hidden></option>{" "}
                {/* Hidden initial option */}
                <option value="Dine In">Dine In</option>
                <option value="Take Away">Take Away</option>
                <option value="Delivery">Delivery</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Drive Thru">Drive Thru</option>
              </select>

              {/* Label */}
              <label
                htmlFor="feedbackChannel"
                className="absolute left-2 text-brand-secondary text-lg"
              >
                Feedback Channel
              </label>

              {/* Display Error Message */}
              {errors.feedbackChannel && (
                <p className="text-brand-primary text-sm mt-1">
                  {errors.feedbackChannel.message}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="bg-brand-darkGray p-4  lg:w-[50%] w-[95vw] mt-8 lg:mt-0 rounded-xl">
          <h2 className="lg:text-2xl text-xl mb-4 font-login lg:mb-0 text-brand-secondary font-bold">
            About Your Visit
          </h2>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex font-ftr lg:flex-row flex-col items-center  justify-between mx-auto">
              <div className="relative w-full text-brand-secondary">
                <select
                  id="store"
                  className={`bg-brand-lgInp h-14 lg:w-64 w-full rounded-t-xl border-b-2 ${
                    errors.store
                      ? "border-brand-primary focus:border-brand-primary"
                      : "border-brand-secondary focus:border-brand-primary"
                  } focus:outline-none px-2 pt-6 text-md`}
                  {...register("store", { required: "Please select a store" })}
                  defaultValue="" // Ensure no value is selected initially
                >
                  <option value="" disabled hidden></option>{" "}
                  {/* Hidden initial option */}
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                </select>

                {/* Label */}
                <label
                  htmlFor="store"
                  className="absolute left-2 text-brand-secondary text-lg"
                >
                  SELECT STORE
                </label>

                {/* Display Error Message */}
                {errors.store && (
                  <p className="text-brand-primary text-sm mt-1">
                    {errors.store.message}
                  </p>
                )}
              </div>

              <div className="relative mt-4  lg:w-64 w-full">
                <Popover>
                  <PopoverTrigger className="" asChild>
                    <div className="relative lg:w-64 w-full">
                      <label className="absolute left-2 top-1 text-brand-secondary text-sm">
                        DATE:
                      </label>
                      <button
                        type="button"
                        className="bg-brand-lgInp mb-4 h-14 lg:w-64 w-full pr-10 rounded-t-xl border-b-2 border-brand-secondary focus:outline-none px-2 pt-6 text-md focus:border-brand-primary text-brand-secondary text-left"
                      >
                        {selectedDate
                          ? format(selectedDate, "dd MMM yyyy") // Format the selected date
                          : "DD-MM-YYYY"}
                      </button>

                      {/* Calendar Icon */}
                      <div className="absolute right-2 text-brand-primary top-1/2 transform -translate-y-1/2">
                        <CalendarIcon />
                      </div>
                    </div>
                  </PopoverTrigger>

                  <PopoverContent className="p-0 w-auto">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md bg-brand-accent text-brand-secondary "
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="relative w-full text-brand-secondary">
              <select
                id="feedbacktype"
                className={`bg-brand-lgInp h-14 w-full rounded-t-xl border-b-2 ${
                  errors.feedbacktype
                    ? "border-red-500 focus:border-red-500"
                    : "border-brand-secondary focus:border-brand-primary"
                } focus:outline-none px-2 pt-6 text-md`}
                {...register("feedbacktype", {
                  required: "Please select a feedback type",
                })}
                defaultValue="" // Ensure no value is selected initially
              >
                <option value="" disabled hidden></option>{" "}
                {/* Hidden initial option */}
                <option value="Dine In">Comments</option>
                <option value="Take Away">Suggestions</option>
                <option value="Delivery">Questions</option>
              </select>

              {/* Label */}
              <label
                htmlFor="feedbacktype"
                className="absolute font-ftr left-2 text-brand-secondary text-lg"
              >
                FEEDBACK TYPE
              </label>

              {/* Display Error Message */}
              {errors.feedbacktype && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.feedbacktype.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                name=""
                id=""
                className="h-28 bg-brand-lgInp rounded-xl focus:outline-brand-primary outline-none px-2 text-brand-secondary w-full mt-4"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto my-5 text-brand-secondary text-xl">
        <button
          type="button"
          onClick={handleButtonClick} // Trigger form submission
          className="bg-brand-primary w-48 font-login rounded-lg py-3 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
