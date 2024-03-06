"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  {
    path: "/news",
    name: "Novidades",
  },
  {
    path: "/contacts",
    name: "Contatos",
  },
  {
    path: "/about",
    name: "Sobre",
  },
  {
    path: "/platform",
    name: "Plataforma",
  },
];

function NavBar() {
  const pathName = usePathname() || "/";
  const [hoverLink, setHoverLink] = React.useState(pathName);

  return (
    <div className="mx-auto border w-[600px] border-green-800/90 rounded-full mb-12 sticky top-2 z-[100] bg-stone-800/70 background-blur-md">
      <nav className="flex items-center justify-center gap-2 w-full z-[100] rounded-lg">
        {navLinks.map((item, index) => {
          const isActive = item.path === pathName;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-r-full text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-200" : "text-zinc-400"
              }`}
              onMouseOver={() => setHoverLink(item.path)}
              onMouseLeave={() => setHoverLink(pathName)}
            >
              <span>{item.name}</span>
              {item.path === hoverLink && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-green-800/20 rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{ width: "100%" }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 100,
                    damping: 5,
                    duration: 0.8,
                  }}
                ></motion.div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default NavBar;
