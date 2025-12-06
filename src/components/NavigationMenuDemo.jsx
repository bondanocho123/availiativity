"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Data contoh (bisa kamu ganti nanti)
const components = [
  {
    title: "Alert Dialog",
    href: "https://ui.shadcn.com/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "https://ui.shadcn.com/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "https://ui.shadcn.com/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "https://ui.shadcn.com/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "https://ui.shadcn.com/docs/primitives/tabs",
    description: "A set of layered sections of content that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "https://ui.shadcn.com/docs/primitives/tooltip",
    description: "A popup that displays information related to an element on hover/focus.",
  },
];

export default function Navbar() {
  return (
    <NavigationMenu className="z-50">
      <NavigationMenuList className="flex gap-2">

        {/* Menu Home */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Dropdown Layanan */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-96 gap-3 p-4 md:grid-cols-1">
              <ListItem href="#deployment" title="Deployment & Hosting">
                Deploy cepat, hosting handal, SSL gratis SSL, monitoring 24/7
              </ListItem>
              <ListItem href="#website" title="Company Profile & Website">
                Website profesional, cepat, SEO-friendly + dashboard admin
              </ListItem>
              <ListItem href="#custom-app" title="Custom Apps (Web/Mobile)">
                Aplikasi robust sesuai kebutuhan bisnis Anda — full ownership
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Menu Portofolio (bisa dinonaktifkan karena belum ada) */}
        <NavigationMenuItem>
          <Link href="/#testimoni" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Testimoni
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Tombol Kontak langsung (tanpa dropdown) */}
        <NavigationMenuItem>
          <Link href="https://wa.me/6281234567890" legacyBehavior passHref>
            <NavigationMenuLink className="bg-cyan-500 text-black hover:bg-cyan-400 px-6 font-semibold">
              Hubungi Sekarang
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Komponen ListItem — pure JSX tanpa TypeScript
const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, href, ...rest } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800 hover:text-cyan-400 focus:bg-zinc-800 focus:text-cyan-400",
            className
          )}
          {...rest}
        >
          <div className="text-sm font-semibold text-cyan-400">{title}</div>
          <p className="line-clamp-2 text-sm text-zinc-400">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";