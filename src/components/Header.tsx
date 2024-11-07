import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";

export default function Header() {
  return <div className="border-b border-muted-foreground bg-background text-foreground fixed w-full top-0 h-24 flex justify-between items-end px-48 py-3">
    <h1 className="text-2xl font-bold">Project Name</h1>
    <div className="flex flex-row gap-6 items-center">
        <span className="relative">
            <Input placeholder="What are you looking for?" className="bg-secondary border-none w-64"/>
            <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground" size={24}/>
        </span>
        <IoCartOutline size={32}/>
    </div>  
  </div>;
}
