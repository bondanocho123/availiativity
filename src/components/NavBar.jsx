// app/components/Navbar.jsx atau di layout.js
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import {Button} from "@/components/ui/button";
import {LogInIcon, UserPlus} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-5 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg bg-teal-500 supports-[backdrop-filter]:bg-teal-500">
      <div className="container flex h-16 items-center justify-between">
        <div className="text-xl font-bold text-white">
            Availiativity
        </div>
        {/* <NavigationMenuDemo /> */}
        <div className="space-x-5">
            <Link href="/login"><Button variant="default" className="font-bold text-white bg-emerald-500"><LogInIcon /> Login</Button></Link>
            <Link href="/register"><Button variant="neutral" className="text-teal-500 font-bold"><UserPlus /> Registrasi</Button></Link>
        </div>
        
      </div>
    </nav>
  );
}