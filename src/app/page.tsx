"use client";

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import ItemCarousel from "@/components/ItemCarousel";

export default function Home() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await fetch("/api/items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="px-52">
      <Nav />
      <div className="h-12"></div>
      <div>
        <div className="text-primary flex flex-row items-center text-sm font-thin mb-4">
          <div className="h-8 w-4 bg-primary rounded-sm mr-2" />
          <span>Featured</span>
        </div>
        <h2 className="text-2xl font-bold">For Sale</h2>
        <div className="flex flex-row gap-8 mt-4">
          {items.length === 0 && (
            <div className="w-full">No items to display</div>
          )}
          <ItemCarousel items={items} />
        </div>
      </div>
    </div>
  );
}