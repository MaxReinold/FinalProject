'use client'

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="px-52">
      <Nav />
      <div className="h-12"></div>
      <div>
        <div className="text-primary flex flex-row items-center text-sm font-thin mb-4"><div className="h-8 w-4 bg-primary rounded-sm mr-2"/>Today's</div>
        <h2 className="text-2xl font-bold">For Sale</h2>
        <div className="flex flex-row gap-8 mt-4">
          <ItemCarousel items={Array(8).fill({
            name: "HAVIT HV-G92 Gamepad",
            salePrice: 120.0,
            originalPrice: 160.0,
            ratingoo5: 5.0,
            ratingCount: 88
          })}/>
        </div>
      </div>
    </div>
  )
}

type ItemProps = {
  name: string,
  salePrice: number,
  originalPrice: number,
  ratingoo5: number,
  ratingCount: number,
  imgSrc?: string
}

function Item({name, salePrice, originalPrice, ratingoo5, ratingCount, imgSrc}: ItemProps) {
  return (
    <div className="flex flex-col gap-2">
      {imgSrc ? <img className="w-52 h-52" src={imgSrc}/>:<div className="w-52 h-52 bg-secondary mb-2"/>}
      <div className="font-bold">{name}</div>
      <div className="inline-flex gap-4 font-bold"><span className="text-primary">${salePrice}</span><span className="text-muted-foreground line-through font-light">${originalPrice}</span></div>
      <div className="inline-flex gap-1 items-center">{Array(Math.floor(ratingoo5)).fill(0).map((_, index) => <FaStar className="text-orange-300" key={index}/>)}  <span className="text-muted-foreground ml-1">({ratingCount})</span>
      </div>
    </div>
  )
}

type ItemCarouselProps = {
  items: ItemProps[];
}

function ItemCarousel({items} : ItemCarouselProps) {

  const [marginLeft, setMarginLeft] = useState(0);

  const style = {
    transition: '0.25s ease-in-out margin',
    marginLeft: `${marginLeft}rem`,
  }

  return (
    <div className="w-full h-fit overflow-clip">
      <div className="flex flex-row gap-4" style={style}>
        {items.map((item, index) => <Item key={index} name={item.name} salePrice={item.salePrice} originalPrice={item.originalPrice} ratingCount={item.ratingCount} ratingoo5={item.ratingoo5}/>)}
      </div>
      <div className="px-4 py-8 flex flex-row gap-4">
        <Button onClick={() => {setMarginLeft(Math.min(marginLeft + 28, 0))}} variant={'secondary'} className="rounded-full w-10 h-10 border-2"><FaArrowLeft /></Button>
        <Button onClick={() => {setMarginLeft(Math.max(marginLeft - 28, -1 * items.length * 28))}} variant={'secondary'} className="rounded-full w-10 h-10 border-2"><FaArrowRight /></Button>
      </div>
    </div>
  )
}