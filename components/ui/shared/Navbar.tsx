import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <>
      <header className="bg-background text-foreground ">
        <MaxWidthWrapper className="py-2">
          <nav className="flex justify-between items-center">
            <Link href="/" className="logo">
              Market
            </Link>
            <ul className="flex  gap-5">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  );
};

export default Navbar;
