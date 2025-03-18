"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const navbarLabel = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Channel",
    href: "/",
  },
  {
    label: "Resume",
    href: "https://abduazim-usmon.netlify.app/"
  }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full py-6 fixed top-0 max-w m-auto z-10  transition-all duration-300 ${scrolled ? "bg-gray-50  shadow-lg py-3" : "bg-transparent text-black"
        }`}
    >
      <div className="special-container px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Abduazim Usmon&apos;s Blog
        </Link>
        <nav className="flex items-center space-x-6">
          {
            navbarLabel.map((item, index) => (
              <Link href={item.href} key={index} className="text-black/50 hover:text-black transition-colors">{item.label}</Link>
            ))
          }
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
