"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [initialPrice, setInitialPrice] = useState(0);

  const CardSlide = [
    {
      img: "/images/cate3.png",
      title: "Krunch Combo",
      price: 570,
      description:
        "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
    },
    {
      img: "/images/cate4.png",
      title: "Krunch Burger",
      price: 490,
      description: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
    },
    {
      img: "/images/BS3.png",
      title: "Chicken & Chips",
      price: 340,
      description:
        "2 pieces of Hot and Crispy Fried Chicken+ Fries + Dinner roll+ signature Vietnamese Sauce",
    },
    {
      img: "/images/cat1.png",
      title: "Hot Wings Bucket",
      price: 770,
      description: "10 Pcs of our Signature Hot & Crispy Wings",
    },
    {
      img: "/images/cate5.png",
      title: "Mighty Zinger",
      price: 650,
      description:
        "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
    },
  ];

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
    setQuantity(1);
    setInitialPrice(product.price); // Set the initial price
  };

  const closeDialog = () => {
    setSelectedProduct(null);
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
    <div className="h-full container w-[90vw] flex flex-col mx-auto my-10 font-login tracking-wider">
      <div className="text-brand-secondary text-4xl uppercase font-bold font-login">
        <h2>
          <span className="relative inline-block">
            Best
            <span
              className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary"
              style={{ width: "100%" }}
            />
          </span>
          <span className="mx-2">Sellers</span>
        </h2>
      </div>

      <Carousel className="mt-8">
        <CarouselContent className=" flex overflow-x-auto scrollbar-thin scrollbar-thumb-brand-primary">
          {CardSlide.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center pl-1 sm:basis-1/2 lg:basis-1/4"
            style={{scrollSnapAlign:"center"}}
            >
              <div className="p-1">
                <Card
                  onClick={() => openDialog(slide)}
                  className="cursor-pointer rounded-md h-[365px] w-[275px] relative shadow-lg"
                >
                  <CardContent className="flex flex-col justify-center mx-auto h-full p-4"
                  style={{scrollSnapType:"x mandatory"}}
                  >
                    <div className="flex flex-col items-start justify-start mt-4">
                      <div className="relative inline-block text-brand-secondary text-xl font-semibold">
                        {slide.title}
                      </div>
                      <div className="flex flex-col mt-2 ml-8">
                        <div className="bg-brand-primary text-brand-secondary text-sm font-bold px-4 py-1 rounded-full shadow ml-32">
                          RS. {slide.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center ">
                      <Image
                        src={slide.img}
                        alt={`Card ${slide.title}`}
                        width={380}
                        height={380}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>

      {isDialogOpen && (
        <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
          <AlertDialogContent className="flex items-center justify-center font-login tracking-wider flex-col lg:max-w-[800px] max-w-[350px] lg:h-[600px] h-[550px] bg-brand-darkGray border-none !rounded-3xl ">
            <AlertDialogCancel
              onClick={closeDialog}
              className="absolute top-4 right-4 bg-brand-primary border-none"
            >
              <X strokeWidth={4} />
            </AlertDialogCancel>

            <div className="flex justify-center lg:my-4 -mt-10 lg:-mt-0">
              <Image
                src={selectedProduct?.img}
                alt={selectedProduct?.title}
                width={200}
                height={200}
                className="object-cover lg:w-[300px] lg:h-[300px] w-[280px] h-[280px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center mx-auto">
              <AlertDialogHeader>
                <div>
                  <AlertDialogTitle className="lg:text-4xl text-3xl text-brand-secondary text-center lg:-mt-14 -mt-10">
                    {selectedProduct?.title}
                  </AlertDialogTitle>
                </div>
                <AlertDialogDescription className="lg:text-lg text-md text-brand-secondary lg:px-36 text-center lg:!-mt-4 !-mt-2">
                  {selectedProduct?.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex items-center justify-center lg:mt-5 mt-2">
                <button
                  className="border-2 border-brand-primary p-1 rounded-lg text-brand-secondary"
                  onClick={decrementQuantity}
                >
                  <Minus />
                </button>
                <div className="text-brand-secondary mx-4 text-2xl">
                  {quantity}
                </div>
                <button
                  className="border-2 border-brand-primary p-1 rounded-lg text-brand-secondary"
                  onClick={incrementQuantity}
                >
                  <Plus />
                </button>
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogAction className="bg-brand-primary lg:text-xl text-lg text-brand-secondary   w-72  lg:h-14 h-12 flex justify-center lg:mt-5 items-center mx-auto ">
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

export default BestSellers;
