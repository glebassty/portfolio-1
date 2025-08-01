import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const LINKS = [
  { id: 1, href: "#", title: "About" },
  { id: 2, href: "#", title: "Portfolio" },
  { id: 3, href: "#", title: "Contacts" },
];

export const HeaderNav = () => {
  return (
    <>
      <ul className="text-text-secondary flex w-full justify-between text-sm uppercase sm:text-xl">
        {LINKS.map((link) => (
          <Link href={link.href} key={link.id}>
            <li className="hover:text-secondary transition-colors duration-300 ease-in-out active:font-bold">
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex w-full items-center justify-between sm:hidden">
        <Link href={"#"}>
          <span className="text-text-secondary text-sm uppercase">
            {/* {activeLink} */} activeLink
          </span>
        </Link>

        <button
          className="text-text-secondary hover:text-secondary transition-colors duration-300 ease-in-out"
          onClick={() => console.log("Open menu")}
        >
          <HamburgerMenuIcon />
        </button>
      </div>
    </>
  );
};
