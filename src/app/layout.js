import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const kanit = Kanit({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "HackZ",
  description: "24-hour National Level Hackathon conducted by CSEA-CEG, Anna University, Chennai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&display=swap"
          rel="stylesheet"
        />
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
