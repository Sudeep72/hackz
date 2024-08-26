"use client";
import Link from "next/link";
import Nav from "@/components/header";

export default function Home() {
  return(
    <>
    <Nav />
    <Link href="/test"> Test </Link>
    <Link href="/test2"> Test2 </Link>
    </>
  );
}
