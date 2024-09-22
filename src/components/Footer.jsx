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

export default function Footer() {
  return (
    <footer className="py-6 px-4">
      <div className="max-w-7xl mx-auto border-2 border-dashed border-sky-950/40 rounded-3xl bg-gradient-to-b from-sky-950/20 to-teal-950/20 backdrop-blur-md">
        <div className="px-6 py-4 md:px-10 md:py-8 flex flex-wrap gap-8 lg:gap-12">
          <div className="mr-auto">
            <LinkPreview
              url="https://cseaceg.org.in/"
              className="text-4xl font-bold tracking-widest bg-gradient-to-r bg-clip-text leading-none dark:text-transparent from-teal-500/80 from-70% to-sky-500/90"
            >
              CSEA
            </LinkPreview>
            <p className="text-sm text-foreground/60 mt-4 max-w-sm tracking-wider">
              The Computer Science and Engineering Association of College of
              Engineering, Guindy
            </p>
            <div className="flex gap-2 py-4">
              <a
                href="#"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
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
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-sky-400/70 hover:text-sky-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <div>
              <a
                href="mailto:mail@sudeepdev.co"
                className="flex items-center tracking-wider text-teal-200/80 hover:underline"
              >
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                mail@sudeepdev.co
              </a>
              <a
                href="mailto:mail@csea.org.in"
                className="flex items-center tracking-wider text-teal-200/80 hover:underline"
              >
                <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                mail@csea.org.in
              </a>
            </div>
          </div>
          <div className="w-[40%] max-w-36">
            <h4 className=" font-bold text-xl bg-gradient-to-b bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
              Quick Links
            </h4>
            <ul className="mt-4 text-sm tracking-wider text-foreground/80 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prized
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[40%] max-w-36">
            <h4 className=" font-bold text-xl bg-gradient-to-b bg-clip-text leading-none text-transparent from-teal-200 to-teal-800/90">
              Contact Us
            </h4>
            <ul className="mt-4 text-sm tracking-wider text-foreground/80 grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sudeep</span>
                <a href="tel:+91 63806 56451" className="hover:underline">
                  +91 63806 56451
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sudeep</span>
                <a href="tel:+91 63806 56451" className="hover:underline">
                  +91 63806 56451
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sudeep</span>
                <a href="tel:+91 63806 56451" className="hover:underline">
                  +91 63806 56451
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-base text-sky-300">Sudeep</span>
                <a href="tel:+91 63806 56451" className="hover:underline">
                  +91 63806 56451
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
