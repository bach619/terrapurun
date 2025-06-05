"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingCart } from "lucide-react";

const aboutItems = [
  {
    title: "Our Mission",
    href: "/about#mission",
    description: "Learn about our conservation goals and vision.",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Peatland Importance",
    href: "/peatlandimportance",
    description: "Discover why peatlands are critical ecosystems.",
    image: "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Community Impact",
    href: "/community",
    description: "Explore how we empower local communities.",
    image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Partnership",
    href: "/partnership",
    description: "Meet the organizations coordinating with us.",
    image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

const productItems = [
  {
    title: "Purun Polybags",
    href: "/products",
    description: "Eco-friendly alternatives to plastic plant containers.",
    image: "https://images.pexels.com/photos/1207978/pexels-photo-1207978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Environmental Benefits",
    href: "/environmentalbenefits",
    description: "Discover how our sustainable purun products contribute to peatland conservation and help prevent devastating fires that threaten our planet's most critical ecosystems.",
    image: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Usage Guide",
    href: "/usageguide",
    description: "Learn how to use purun polybags effectively.",
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-12 w-12 text-[#2D5A3D]" />
            <span className="font-playfair text-xl font-bold text-[#2D5A3D]">Terrapurun</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {aboutItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} image={item.image}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {productItems.map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href} image={item.image}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
             <Link href="/cart" className="text-[#2D5A3D] hover:text-[#3b7f4d]">
              <ShoppingCart className="h-8 w-8" />
            </Link>
            <Link href="/products">
              <Button variant="default" className="bg-[#2D5A3D] hover:bg-[#3b7f4d]">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { image?: string }>(
  ({ className, title, children, image, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-start gap-3">
            {image && (
                <div className="relative flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                  <Image src={image!} alt={title ?? ""} fill className="object-cover" />
                </div>
              )}

              <div className="space-y-1">
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";