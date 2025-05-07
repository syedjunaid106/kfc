'use client'

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Heart, X, Plus,Minus } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
const MenuList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1)
const [initialPrice, setInitialPrice] = useState(0)

const openDialog = (item) =>{
setSelectedItem(item)
setQuantity(1)
setInitialPrice(item.price)
setIsDialogOpen(true)
}
const closeDialog =()=>{
setSelectedItem(null)
setIsDialogOpen(false);
}
const incrementQuantity =()=>{
setQuantity((prev)=>(prev + 1))
}
const decrementQuantity = () =>{
setQuantity((prev)=>(prev > 1 ? prev - 1 : 1))
}
const calculateTotalPrice = ()=>{
return(initialPrice*quantity).toFixed(2)
}
  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center">
      {items.map((item) => (
        <div key={item.id} className="p-1 group">
          <Card className="rounded-md cursor-pointer h-[418px] w-[290px] font-login relative shadow-lg"
          onClick={()=>openDialog(item)}
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
              <div className="flex flex-col items-start mt-1">
                <div className="text-xl font-bold text-brand-secondary">{item.name}</div>
                <div className="text-md mt-1 line-clamp-1 text-brand-secondary">{item.description}</div>
                <div className="text-xl font-bold text-brand-secondary mt-2">
                 <span className='text-lg'>RS</span>  {item.price}
                </div>
              </div>
              <div className="flex justify-center mt-3 ">
                <button className="bg-brand-primary hover:bg-brand-secondary text-md text-brand-secondary hover:text-brand-primary font-bold px-4 py-2 rounded-md">
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
    {isDialogOpen && (
    <AlertDialog open={isDialogOpen} onOpenChange={closeDialog}>
    <AlertDialogContent className="lg:max-w-[800px] font-login max-w-[350px] h-[550px] lg:h-[600px] bg-brand-darkGray border-none !rounded-3xl">
    <AlertDialogCancel onClick={closeDialog}
    className="absolute top-4 right-4 bg-brand-primary border-none"
    >
    <X strokeWidth={4}/>
    </AlertDialogCancel>
    <div className='flex justify-center lg:my-4'>
    <Image
    src={selectedItem?.image}
     alt={selectedItem?.name}
    width={300}
    height={300}
    className="object-cover w-[250px] h-[250px]"
    
    />
    </div>
    <div>
    <AlertDialogHeader className='flex flex-col items-center justify-center mx-auto'>
    <AlertDialogTitle className='lg:text-4xl text-2xl text-brand-secondary text-center lg:-mt-14 -mt-4'>
    {selectedItem?.name}
    </AlertDialogTitle>
       <AlertDialogDescription className="lg:text-lg text-md text-brand-secondary lg:px-36 text-center">
                  {selectedItem?.description}
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
              <AlertDialogAction className="bg-brand-primary text-xl text-brand-secondary lg:w-[50%] lg:h-14 h-12 flex justify-center lg:mt-2 items-center mx-auto ">
                <span className="mr-6">{calculateTotalPrice()} RS</span> Add to
                Bucket
              </AlertDialogAction>
            </AlertDialogFooter>
    </AlertDialogContent>
    </AlertDialog>
    )}
    </div>
  );
};

export default MenuList;
