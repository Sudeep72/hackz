import { Apple } from 'lucide-react';
import Link from 'next/link';

export default function MainNav({ isScrolled }) {
  return (
    <div
      className={`hidden md:flex justify-between items-center w-full transition-all duration-300 ${
        isScrolled 
          ? 'rounded-xl backdrop-blur-md mx-28 backdrop-brightness-200'
          : ''
      }`}
    >
      <Link href='/'>
        <Apple className="text-white transition-colors duration-300" />
      </Link>
      <nav className='flex items-center gap-3 lg:gap-4'>
        {['About', 'Sponsors', 'Prizes', 'Rules', 'Themes', 'Timeline', 'FAQs', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
        <Link
          href='/join'
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Join Us
        </Link>
      </nav>
    </div>
  );
}