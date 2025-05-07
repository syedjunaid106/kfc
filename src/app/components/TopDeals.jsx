"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Heart, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
const TopDeals = () => {
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [initialPrice, setInitialPrice] = useState(0);

  const CardData = [
    {
      img: "/images/BS3.png",
      title: "Krunch Combo",
      price: 950,
      desc: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
    },
    {
      img: "/images/cat1.png",
      title: "Krunch Burger",
      price: 1350,
      desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
    },
    {
      img: "/images/TD3.png",
      title: "Chicken & Chips",
      price: 2590,
      desc: "An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink",
    },
  ];
  const openDialog = (deal) => {
    setSelectedDeal(deal);
    setQuantity(1);
    setInitialPrice(deal.price);
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setSelectedDeal(null);
    setIsDialogOpen(false);
  };
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const calculateTotalPrice = () => {
    return (initialPrice * quantity).toFixed(2);
  };
  return (
    <div className="h-full w-[90vw] flex flex-col mx-auto my-10 font-login tracking-wider">
      <div className="text-brand-secondary text-4xl uppercase font-bold font-login">
        <h2>
          <span className="relative inline-block">
            Top
            <span
              className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary"
              style={{ width: "100%" }}
            />
          </span>
          <span className="mx-2">Deals</span>
        </h2>
      </div>

      <div className="flex items-center lg:justify-start justify-center flex-wrap gap-6 mt-8 ">
        {CardData.map((deal, index) => (
          <div key={index} className="p-1 group">
            <Card
              className="cursor-pointer rounded-md h-[460px] w-[295px] relative shadow-lg"
              onClick={() => {
                openDialog(deal);
              }}
            >
              <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
                <div className="flex justify-center items-center">
                  <Image
                    src={deal.img}
                    alt={`Card ${deal.title}`}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-4">
                  <div className="relative inline-block text-brand-secondary text-xl font-bold">
                    {deal.title}
                  </div>
                  <div className="text-sm text-brand-secondary  line-clamp-2 mt-2">
                    {deal.desc}
                  </div>
                  <div className="text-md font-bold mt-4 text-brand-secondary">
                    <span>RS.</span> {deal.price}
                  </div>
                </div>
                <div className=" flex items-center justify-center mx-auto w-40">
                  <button className="absolute -bottom-4  bg-brand-primary hover:bg-brand-secondary hover:text-brand-primary duration-500 px-4 py-2 rounded-md text-brand-secondary text-sm font-bold">
                    + Add to Bucket
                  </button>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="text-brand-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {isDialogOpen && (
        <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
          <AlertDialogContent className="lg:max-w-[800px] max-w-[350px] h-[550px] lg:h-[600px] font-login tracking-wider bg-brand-darkGray border-none !rounded-3xl">
            <AlertDialogCancel
              onClick={closeDialog}
              className="absolute top-4 right-4 bg-brand-primary border-none"
            >
              <X strokeWidth={4} />
            </AlertDialogCancel>

            <div className="flex justify-center lg:my-4">
              <Image
                src={selectedDeal?.img}
                alt={selectedDeal?.title}
                width={300}
                height={300}
                className="object-cover w-[250px] h-[250px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <AlertDialogHeader>
                <AlertDialogTitle className="lg:text-4xl text-2xl text-brand-secondary text-center lg:-mt-14 -mt-4">
                  {selectedDeal?.title}
                </AlertDialogTitle>
                <AlertDialogDescription className="lg:text-lg text-md text-brand-secondary lg:px-36 text-center">
                  {selectedDeal?.desc}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex items-center justify-center lg:mt-6 mt-2">
                <button
                  onClick={decrementQuantity}
                  className=" text-brand-secondary border-2 border-brand-primary p-1 rounded-lg"
                >
                  <Minus />
                </button>
                <div className=" text-brand-secondary text-2xl px-6 py-2">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  className="border-2 border-brand-primary text-brand-secondary p-1 rounded-lg"
                >
                  <Plus />
                </button>
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogAction className="bg-brand-primary text-xl text-brand-secondary   lg:w-[50%] lg:h-14 h-12 flex justify-center lg:mt-2 items-center mx-auto ">
                {" "}
                <span className="mr-6"> {calculateTotalPrice()} RS</span> Add to
                Bucket
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default TopDeals;
