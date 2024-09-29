import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "HackZ 2024",
  description: "Join us for the 'HackZ 24-Hour National Level Hackathon,' organized by CSEA-CEG at CEG Campus, Anna University, Chennai! This exciting event invites talented students from across the country to showcase their coding skills, innovative ideas, and creativity. Participants will have 24 hours to develop cutting-edge software solutions, apps, or prototypes in a collaborative environment. With industry experts as mentors and various prizes at stake, this hackathon is an excellent opportunity for networking, skill development, and gaining real-world experience in technology and entrepreneurship. Don't miss your chance to be part of this thrilling challenge that promises to push the boundaries of innovation and teamwork! Secure your spot today and register now to embark on this exhilarating journey!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* Open Graph tags */}
        <meta property="og:title" content="HackZ 2024" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://hackz.cseaceg.org.in/hackz-logo.jpg" />
        <meta property="og:url" content="https://hackz.cseaceg.org.in/" />
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hackz.cseaceg.org.in/" />
      </head>
      <body className={kanit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
