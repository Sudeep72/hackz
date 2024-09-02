import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-transparent py-8 border border-gray-300 border-t-1 rounded-t-xl backdrop-blur-md backdrop-brightness-150">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-8">
          <h3 className="font-bold text-lg text-teal-400 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Rules
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-gray-300 pb-8 md:pb-0 md:pr-4">
          <h3 className="font-bold text-lg text-teal-400 mb-4">Get in Touch</h3>
          <ul className="space-y-4">
            <li>
              <a href="mailto:mail@sudeepdev.co" className="hover:underline">
                mail@sudeepdev.co
              </a>
            </li>
            <li>
              <a href="mailto:mail@csea.org.in" className="hover:underline">
                mail@csea.org.in
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transform transition"
            >
              <Instagram className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:scale-110 transform transition"
            >
              <Facebook className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transform transition"
            >
              <Twitter className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transform transition"
            >
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col pt-8 md:pt-0">
          <h3 className="font-bold text-lg text-teal-400 mb-4">Contact Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <p className="hover:underline">Sudeep</p>
              <p>
                <a href="tel:+916380656451" className="hover:underline">
                  +91 63806 56451
                </a>
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="hover:underline">John Doe</p>
              <p>
                <a href="tel:+916969696969" className="hover:underline">
                  +91 69696 96969
                </a>
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="hover:underline">Tomato</p>
              <p>
                <a href="tel:+91123567890" className="hover:underline">
                  +91 1235 67890
                </a>
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="hover:underline">Potato</p>
              <p>
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-10 text-center text-gray-400">
        <p className="font-normal">
          &copy; {new Date().getFullYear()} CSEA. All rights reserved.
        </p>
        <p className="font-normal flex justify-center items-center mt-2">
        Designed and developed with <Heart className="h-5 w-5 text-red-500 mx-2" /> by
          <LinkPreview url="https://sudeepdev.co/" className="font-bold mx-2">
            {" "}Sudeep
          </LinkPreview>
        </p>
      </div>
    </footer>
  );
}
