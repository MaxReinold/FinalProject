'use client'

import Nav from "@/components/Nav";
import { FaStar } from "react-icons/fa6";
import { Rating } from "react-simple-star-rating";

export default function Home() {
  return (
    <div className="px-52 pt-24">
      <Nav />
      <div className="h-12"></div>
      <div>
        <div className="text-primary flex flex-row items-center text-sm font-thin mb-4"><div className="h-8 w-4 bg-primary rounded-sm mr-2"/>Today's</div>
        <h2 className="text-2xl font-bold">For Sale</h2>
        <div className="flex flex-row gap-8 mt-4">
          {Array(5).fill({
            name: "HAVIT HV-G92 Gamepad",
            salePrice: 120.0,
            originalPrice: 160.0,
            ratingoo5: 5.0,
            ratingCount: 88
          }).map((item, index) => {
            return <div key={index} className="flex flex-col gap-2">
              <div className="w-52 h-52 bg-secondary mb-2"/>
              <div className="font-bold">{item.name}</div>
              <div className="inline-flex gap-4 font-bold"><span className="text-primary">${item.salePrice}</span><span className="text-muted-foreground line-through font-light">${item.originalPrice}</span></div>
              <div className="inline-flex gap-1 items-center">{Array(5).fill(0).map((_, index)=> <FaStar className="text-orange-300" key={index}/>)} <span className="text-muted-foreground ml-1">({item.ratingCount})</span>
              
              </div>
            </div>
          })}
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  )
}
