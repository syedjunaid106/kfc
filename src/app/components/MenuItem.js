import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Heart } from 'lucide-react';
import menuData from '@/data/menuData';
const MenuItem = () => {
  return (
    <div>
       <div className="flex items-center justify-center flex-wrap gap-6 mt-8">
        {menuData.map((item) => (
          <div key={item.id} className="p-1 group">
            <Card
              className="cursor-pointer rounded-md h-[420px] w-[265px] relative shadow-lg"
            
            >
              <CardContent className="flex flex-col justify-center mx-auto h-full p-4">
                <div className="flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover rounded-lg transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-4">
                  <div className="relative inline-block text-brand-secondary text-xl font-bold">
                    {item.name}
                  </div>
                  <div className="text-sm text-brand-secondary line-clamp-2 mt-2">
                    {item.description}
                  </div>
                  <div className="text-md font-bold mt-4 text-brand-secondary">
                    <span>RS.</span> {item.price}
                  </div>
                </div>
                <div className=" flex items-center justify-center mx-auto w-40 ">
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
    </div>
  )
}

export default MenuItem
