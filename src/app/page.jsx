"use client";
import Link from "next/link";
import Nav from "@/components/header";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mt-16">
        <Link href="/home">Home</Link>
        <Link href="/timer">Timer</Link>
      </div>
    </>
  );
}
