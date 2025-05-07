"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { CornerUpRight } from "lucide-react";

const PickupBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationSelect, setLocationSelect] = useState({
    isTrue: false,
    value: "",
  });

  const closeDialog = () => setIsOpen(false);
  const addresses = [
    {
      location: "Mangla",
      address: "Opp Cantonment board office Near Mp check post Cantt",
      startTime: "11:00 AM",
      endTime: "12:00 AM",
      distance: "5 Km",
    },
    {
      location: "MirPur AJK",
      address: "53-main kotli road Sector F1 mirpur Ajk",
      startTime: "11:00 AM",
      endTime: "01:00 AM",
      distance: "14 Km",
    },
    {
      location: "Jehlum",
      address: "Next to Jehlum Toll plaza PSO pump Near golf club",
      startTime: "11:00 AM",
      endTime: "12:00 AM",
      distance: "20 Km",
    },
    {
      location: "Kharian",
      address: "Main Gt Road Opp PIA off Kharian Cantt",
      startTime: "11:00 AM",
      endTime: "12:00 AM",
      distance: "39 Km",
    },
  ];

  return (
    <div className=" font-login">
      {/* Trigger Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="bg-brand-darkGray font-ftr focus:border-brand-primary focus:border-[3px] rounded-md px-4 py-2 text-brand-secondary w-36 h-12 flex items-center justify-center space-x-2">
            <Image
              src="/images/deliver.png"
              alt="Deliver"
              width={30}
              height={30}
            />{" "}
            <span className="font-bold">PICK UP</span>
          </button>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="rounded-lg font-login bg-brand-darkGray h-[91vh] text-white">

          <DialogTitle></DialogTitle>
          {/* Header */}
          <div className="text-2xl text-center font-bold border-b border-white pb-2">
            Pickup your order
          </div>

          {/* Body */}
          <div className="mt-4 mb-4 overflow-y-scroll">
            <div className="flex flex-col justify-center">
              {addresses.map((add, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setLocationSelect({ isTrue: true, value: add.location })
                  }
                  tabIndex={0}
                  className="pb-3 px-1 border-b-2 cursor-pointer focus:bg-brand-primary transition-colors duration-300 focus:!text-white group"
                >
                  <h5 className="text-lg font-semibold">{add.location}</h5>
                  <p className="text-base">{add.address}</p>
                  <h5 className="timing text-lg font-semibold group-focus:text-white text-brand-primary">
                    <span>{add.startTime} </span>-<span> {add.endTime}</span>
                  </h5>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <h6 className="mb-0 text-base font-medium">
                        Distance to store:
                      </h6>
                      <h6 className="mb-0 text-base font-medium">
                        {add.distance}
                      </h6>
                    </span>
                    <button
                      className="flex items-center justify-center me-5 px-3 py-1 bg-brand-primary text-white font-medium rounded-sm hover:bg-red-700 focus:outline-none focus:ring focus:bg-brand-darkGray group-focus:bg-[#1d1815]"
                      type="button"
                    >
                      <h6 className="mb-0 text-sm font-medium mr-2">
                        Get Direction
                      </h6>
                      <CornerUpRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-white pt-2 text-right">
            <div className=" w-full h-10 text-center text-xl flex justify-center items-center ">
              <button
                disabled={!locationSelect.isTrue}
                aria-disabled={!locationSelect.isTrue}
                className={`flex items-center justify-center me-5 px-3 py-1 rounded-sm focus:outline-none focus:ring ${
                  locationSelect.isTrue
                    ? "bg-brand-primary text-white hover:bg-red-700 focus:bg-brand-darkGray"
                    : "bg-brand-inpnot text-gray-500 cursor-not-allowed"
                }`}
                type="button"
              >
                Start your order
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PickupBtn;
