import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

export default function MainNav({ isScrolled }) {
  return (
    <div
      className={`hidden md:flex justify-between items-center w-full transition-all duration-300 ${
        isScrolled 
          ? 'rounded-xl backdrop-blur-md px-12 backdrop-brightness-200'
          : ''
      }`}
    >
      <Link href='/'>
        <Image
          src={Logo}
          alt='HackZ Logo'
          width={120}
        />
      </Link>
      <nav className='flex items-center gap-6 lg:gap-8'>
        {['Home', 'About', 'Sponsors', 'Prizes','Tracks', 'Timeline', 'FAQs', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/#${item.toLowerCase()}`}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
        <Link
          href='/#joinus'
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Join Us
        </Link>
      </nav>
    </div>
  );
}
