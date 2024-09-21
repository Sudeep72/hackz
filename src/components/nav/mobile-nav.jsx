import { useState } from "react";
import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import AnimatedBackground from "@/components/effects/animated-bg";
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const TABS = [
    "About",
    "Sponsors",
    "Prizes",
    "Tracks",
    "Timeline",
    "FAQs",
    "Contact",
  ];
  const handleClose = () => setIsOpen(false);

  return (
    <div className="lg:hidden flex justify-between items-center w-full">
      <Link href="/">
        <Image src={Logo} alt="HackZ Logo" width={120} />
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          className="text-white transition-colors duration-300"
          onClick={() => setIsOpen(true)}
        >
          <AlignRight />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="bg-gradient-to-b  from-black to-slate-950 flex flex-col gap-0"
        >
          <SheetTitle className="mb-6">
            <Link href="/" onClick={handleClose}>
              <Image src={Logo} alt="HackZ Logo" width={120} />
            </Link>
          </SheetTitle>
          <AnimatedBackground
            as="nav"
            className="rounded-lg bg-teal-300/10 dark:bg-teal-300/10"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {TABS.map((tab, index) => (
              <Link
                key={index}
                data-id={tab}
                href={`/#${tab.toLowerCase()}`}
                className="px-4 py-2 text-xl font-medium tracking-wider"
                onClick={handleClose}
              >
                {tab}
              </Link>
            ))}
          </AnimatedBackground>

          <Link
            href="/#joinus"
            className="bg-teal-600/40 border-2 border-transparent hover:border-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-center mt-4"
            onClick={handleClose}
          >
            Join Us
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
}
