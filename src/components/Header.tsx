"use client"

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return <div className="border-b border-muted-foreground bg-background text-foreground fixed w-full top-0 h-24 flex justify-between items-end px-48 py-3">
    <h1 className="text-2xl font-bold"><Link href="/">Project Name</Link></h1>
    <div className="flex flex-row gap-6 items-center">
        <span className="relative">
            <Input placeholder="What are you looking for?" className="bg-secondary border-none w-64"/>
            <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground" size={24}/>
        </span>
        <IoCartOutline size={32}/>
        {
          user ? <Button variant={'ghost'} onClick={() => logout()}>Logout</Button> : 
          <Button asChild variant={'ghost'}><Link href="/login">Login</Link></Button>
        }
    </div>  
  </div>;
}
