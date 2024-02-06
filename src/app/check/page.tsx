import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
function page() {
  return (
   <>
   <div>
   <Carousel className="bg-white w-64 mx-6 my-6 px-4 py-6 text-black flex-col items-center justify-between ">
  <CarouselContent>
    <CarouselItem>Bishal</CarouselItem>
    <CarouselItem>Abhay</CarouselItem>
    <CarouselItem>Jonnu</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

   </div>
   </>
  )
}

export default page