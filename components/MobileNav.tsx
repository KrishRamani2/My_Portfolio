"use client";

import { Sheet,SheetContent,SheetTrigger} from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CiMenuFries} from "react-icons/ci"

const links= [{
  name:'Home',
  path:"/",
},
{
  name:'Services',
  path:"/services",
},
{
  name:'Resume',
  path:"/resume",
},
{
  name:'Work',
  path:"/work",
},
{
  name:'Contact',
  path:"/contact",
},]
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex
      justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent "/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <Link href="/" className="">
        <div className="text-4xl font-semibold flex justify-center bottom-9">
          Krish
        </div> </Link>
      
        <nav className="top-15
        flex flex-col justify-center items-center gap-8"> {links.map((link,index)=>{
      return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent text-xl" } capitalize font-medium hover:text-accent transition-all `}>{link.name}</Link>
      
     })}</nav> 
      </SheetContent>
    </Sheet>
  )}

export default MobileNav
