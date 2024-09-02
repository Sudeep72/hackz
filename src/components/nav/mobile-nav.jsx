import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Logo from '@/assets/logo.png';
import Link from "next/link";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden flex justify-between items-center w-full">
      <Link href="/">
        <Image
          src={Logo}
          alt='HackZ Logo'
          width={120}
        />
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          className="text-white transition-colors duration-300"
          onClick={() => setIsOpen(true)}
        >
          <AlignRight />
        </SheetTrigger>
        <SheetContent side="right" className="bg-gray-900">
          <nav className="flex flex-col gap-3 mt-6">
            {[
              "Home",
              "About",
              "Sponsors",
              "Prizes",
              "Tracks",
              "Timeline",
              "FAQs",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300"
                onClick={handleClose}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/#joins"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center mt-4 transition-colors duration-300"
              onClick={handleClose}
            >
              Join Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
