"use client";
import Link from "next/link";
import Nav from "@/components/header";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mt-16">
        <Link href="/test">Test</Link>
        <Link href="/test2">Test2</Link>
      </div>
    </>
  );
}
