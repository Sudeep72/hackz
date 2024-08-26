import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from '@/components/ui/sheet';
  import { AlignRight, Apple } from 'lucide-react';
  import Link from 'next/link';
 
  
  export default function MobileNav({ isScrolled }) {
    return (
      <div className='md:hidden flex justify-between items-center w-full'>
        <Link href='/'>
          <Apple className="text-white transition-colors duration-300" />
        </Link>
        <Sheet>
          <SheetTrigger className="text-white transition-colors duration-300">
          <AlignRight />
          </SheetTrigger>
          <SheetContent side='right' className="bg-gray-900">
            <nav className='flex flex-col gap-3 mt-6'>
              {['About', 'Sponsors', 'Prizes', 'Rules', 'Themes', 'Timeline', 'FAQs', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-gray-300">
                  {item}
                </Link>
              ))}
              <Link href='/join' className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center mt-4 transition-colors duration-300">
                Join Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    );
  }