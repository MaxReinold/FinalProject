"use client";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const user = session?.user;

  const sessionButton = user?.id ? (
    <Button variant={"ghost"} onClick={() => signOut()}>
      <p>Logout</p>
    </Button>
  ) : (
    <Button asChild variant={"ghost"} onClick={() => signIn()}>
      <p>Login</p>
    </Button>
  );

  return (
    <div className="border-b border-muted-foreground bg-background text-foreground fixed w-full top-0 h-24 flex justify-between items-end px-48 py-3 z-10">
      <Link className="mb-[-12px]" href="/">
        <Image src="/logo.png" alt="logo" width={180} height={100} />
      </Link>
      <div className="flex flex-row gap-6 items-center">{sessionButton}</div>
    </div>
  );
}
