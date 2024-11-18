"use client";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import { ShoppingItem } from "@/lib/types";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      fetch("/api/items")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setItems(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="px-52">
      <Nav />
      <div className="h-12"></div>
      <div>
        <div className="text-primary flex flex-row items-center text-sm font-thin mb-4">
          <div className="h-8 w-4 bg-primary rounded-sm mr-2" />
          Today's
        </div>
        <h2 className="text-2xl font-bold">For Sale</h2>
        <div className="flex flex-row gap-8 mt-4">
          <ItemCarousel items={items} />
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  id: string;
  name: string;
  salePrice: number;
  originalPrice: number;
  ratingoo5: number;
  ratingCount: number;
  imgSrc: string;
};

function Item({
  id,
  name,
  salePrice,
  originalPrice,
  ratingoo5,
  ratingCount,
  imgSrc,
}: ItemProps) {
  const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      alert("Item Deleted");
    } catch (error) {
      console.error(error);
      alert("Failed to delete item");
    }
  };

  return (
    <div className="flex flex-col gap-2 relative">
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={`Picture of ${name}`}
          width={200}
          height={200}
        />
      ) : (
        <div className="w-52 h-52 bg-secondary mb-2" />
      )}
      <div className="font-bold">{name}</div>
      <div className="inline-flex gap-4 font-bold">
        <span className="text-primary">${salePrice}</span>
        <span className="text-muted-foreground line-through font-light">
          ${originalPrice}
        </span>
      </div>
      <div className="inline-flex gap-1 items-center">
        {Array(Math.floor(ratingoo5))
          .fill(0)
          .map((_, index) => (
            <FaStar className="text-orange-300" key={index} />
          ))}
        <span className="text-muted-foreground ml-1">({ratingCount})</span>
      </div>
      <IoMdCloseCircle
        className="text-red-500 absolute top-2 right-2 cursor-pointer w-6 h-6"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
}

type ItemCarouselProps = {
  items: ShoppingItem[];
};

function ItemCarousel({ items }: ItemCarouselProps) {
  const [marginLeft, setMarginLeft] = useState(0);

  const style = {
    transition: "0.25s ease-in-out margin",
    marginLeft: `${marginLeft}rem`,
  };

  return (
    <div className="w-full h-fit overflow-clip">
      <div className="flex flex-row gap-4" style={style}>
        {items.map((item, index) => (
          <Item
            key={index}
            id={item._id}
            name={item.name}
            salePrice={item.price}
            originalPrice={100}
            ratingCount={150}
            ratingoo5={4.3}
            imgSrc={item.pictures[0]}
          />
        ))}
      </div>
      <div className="px-4 py-8 flex flex-row gap-4">
        <Button
          onClick={() => setMarginLeft(Math.min(marginLeft + 28, 0))}
          variant={"secondary"}
          className="rounded-full w-10 h-10 border-2"
        >
          <FaArrowLeft />
        </Button>
        <Button
          onClick={() =>
            setMarginLeft(Math.max(marginLeft - 28, -1 * items.length * 28))
          }
          variant={"secondary"}
          className="rounded-full w-10 h-10 border-2"
        >
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
