import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const ExploreMenu = () => {
  const CardSlide = [
    { img: "/images/cat1.png", title: "Everyday Value" },
    { img: "/images/cate2.png", title: "Ala-Carte-&-Combos" },
    { img: "/images/cate3.png", title: "Promotion" },
    { img: "/images/cate4.png", title: "Signature-Boxes" },
    { img: "/images/cat5.png", title: "Sharing" },
    { img: "/images/cate5.png", title: "Snacks-&-Beverages" },
    { img: "/images/cate2.png", title: "Midnight(start at 12am)" },
  ];

  return (
    <div className="h-full container w-[90vw] flex flex-col mx-auto my-10 font-login tracking-wider">
      <div className="text-brand-secondary text-4xl uppercase font-bold font-login">
        <h2>
          <span className="relative inline-block">
            Explore
            {/* Half underline effect */}
            <span
              className="absolute bottom-0 left-0 w-full border-b-2 rounded-full border-brand-primary"
              style={{ width: "70%" }}
            />
          </span>
          <span className="mx-2">Menu</span>{" "}
        </h2>
      </div>

      <Carousel className="mt-8">
        <CarouselContent className="-ml-1 ">
          {CardSlide.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex items-center container justify-center w-[90vw] pl-1 sm:basis-1/2 lg:basis-1/5"
            >
              <div className="p-1">
                <Link href="/menu">
                  <Card className="cursor-pointer rounded-full w-[220px] h-[220px]">
                    <CardContent className="flex flex-col mx-auto aspect-square items-center justify-center h-full ">
                      {/* Use Next.js Image component for optimized images */}
                      <div className="flex justify-center ">
                        <Image
                          src={slide.img}
                          alt={`Card ${slide.title}`}
                          width={150} // Set width for the image
                          height={150} // Set height for the image
                          className="object-cover rounded-lg"
                        />
                      </div>

                      {/* Title container */}
                      <div className="flex items-center  justify-center w-full">
                        <div className="text-center relative inline-block text-brand-secondary text-lg ">
                          {slide.title}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="bg-brand-primary border-none text-brand-secondary " />
        <CarouselPrevious className="bg-brand-primary border-none text-brand-secondary" />
      </Carousel>
    </div>
  );
};

export default ExploreMenu;
