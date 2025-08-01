import Link from "next/link";
import React from "react";

const LINKS = [
  { id: 1, title: "Twitter", href: "#" },
  { id: 2, title: "Instagram", href: "#" },
  { id: 3, title: "LinkdIn", href: "#" },
];

export const FooterNav = () => {
  return (
    <ul className="flex gap-3">
      {LINKS.map((link) => (
        <Link href={link.href} key={link.id}>
          <li className="hover:text-secondary active:text-secondary text-xl font-medium transition-colors duration-300 ease-in-out">
            {link.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};
