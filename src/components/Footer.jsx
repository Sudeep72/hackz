import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  Mail,
} from "lucide-react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="py-6 px-4">
      <div className="relative overflow-hidden max-w-7xl mx-auto border-2 border-dashed border-sky-950/40 rounded-3xl bg-gradient-to-b from-sky-950/20 to-teal-950/20 backdrop-blur-md">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,#042f2e,transparent)] opacity-20",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="px-6 py-4 md:px-10 md:py-8 flex flex-wrap gap-8 lg:gap-12">
          <div className="mr-auto">
            <a
              href="https://cseaceg.org.in/"
              className="text-4xl font-bold tracking-widest bg-gradient-to-r bg-clip-text leading-none dark:text-transparent from-teal-500/80 from-70% to-sky-500/90"
              target="_blank"
            >
              CSEA
            </a>
            <p className="text-sm text-foreground/60 mt-4 max-w-sm tracking-wider">
              The Computer Science and Engineering Association of College of
              Engineering, Guindy
            </p>
            <div className="flex gap-2 py-4">
              <a
                href="https://www.instagram.com/csea_ceg"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Instagram size={24} />
              </a>
              {/* <a
                href="#"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Twitter size={24} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/csea-ceg"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div>
              <a
                href="mailto:hackz.csea@gmail.com"
                className="flex items-center tracking-wider text-teal-200/80 hover:underline"
              >
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                hackz.csea@gmail.com
              </a>
              <a
                href="mailto:cseaceg25@gmail.com"
                className="flex items-center tracking-wider text-teal-200/80 hover:underline"
              >
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                cseaceg25@gmail.com
              </a>
            </div>
          </div>
          <div className="w-[40%] lg:max-w-48">
            <h4 className=" font-bold text-xl bg-gradient-to-b bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
              Quick Links
            </h4>
            <ul className="mt-4 text-sm tracking-wider text-foreground/80 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:underline">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#prizes" className="hover:underline">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:underline">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:underline">
                  FAQs
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li> */}
              <li>
                <a href="#joinus" className="hover:underline">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[40%] lg:max-w-48">
            <h4 className=" font-bold text-xl bg-gradient-to-b bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
              Contact Us
            </h4>
            <ul className="mt-4 text-sm tracking-wider text-foreground/80 grid gap-x-4 gap-y-2">
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sunil Kumar</span>
                <a href="tel:+91 63831 23505" className="hover:underline">
                  +91 63831 23505
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Smrithi Prakash</span>
                <a href="tel:+91 80728 69255" className="hover:underline">
                  +91 80728 69255
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sharan</span>
                <a href="tel:+91 95856 12262" className="hover:underline">
                  +91 95856 12262
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Varsha</span>
                <a href="tel:+91 6382 952323" className="hover:underline">
                  +91 63829 52323
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="max-w-7xl mx-auto border-dashed bg-transparent border-sky-950/40" />
        <div className="p-4 grid place-content-center border-t-2 border-dashed border-sky-950/40 ">
          <span className="text-center tracking-widest text-sm text-teal-500">
            © 2024 CSEA. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
