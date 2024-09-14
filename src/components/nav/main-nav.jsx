import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import AnimatedBackground from "@/components/effects/animated-bg";

export default function MainNav({ isScrolled }) {
  const TABS = [
    "About",
    "Sponsors",
    "Prizes",
    "Tracks",
    "Timeline",
    "FAQs",
    "Contact",
  ];
  return (
    <div className="hidden lg:flex justify-between items-center w-full transition-all duration-300">
      <Link href="/">
        <Image src={Logo} alt="HackZ Logo" width={120} />
      </Link>
      <nav className="flex items-center gap-0.5 lg:gap-1">
        <AnimatedBackground
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
              className="px-4 py-2"
            >
              {tab}
            </Link>
          ))}
        </AnimatedBackground>
        <div></div>
        <Link
          href="/#joinus"
          className="bg-teal-600/40 border-2 border-transparent hover:border-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-2xl transition-colors duration-300"
        >
          Join&nbsp;Us
        </Link>
      </nav>
    </div>
  );
}
