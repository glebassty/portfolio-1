import Link from "next/link";
import React from "react";

const LINKS = [
  { id: 1, title: "Twitter", href: "#" },
  { id: 2, title: "Instagram", href: "#" },
  { id: 3, title: "LinkdIn", href: "#" },
];

export const FooterNav = () => {
  return (
    <ul>
      {LINKS.map((link) => (
        <Link href={link.href} key={link.id}>
          <li>{link.title}</li>
        </Link>
      ))}
    </ul>
  );
};
