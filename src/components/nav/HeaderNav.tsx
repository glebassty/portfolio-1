import Link from "next/link";
import React from "react";

export const HeaderNav = () => {
  return (
    <ul className="text-text-secondary flex w-full justify-between text-sm uppercase sm:text-xl">
      <Link href={"#"}>
        <li className="hover:text-secondary transition-colors duration-300 ease-in-out active:font-bold">
          About
        </li>
      </Link>
      <Link href={"#"}>
        <li className="hover:text-secondary transition-colors duration-300 ease-in-out active:font-bold">
          Portfolio
        </li>
      </Link>
      <Link href={"#"}>
        <li className="hover:text-secondary transition-colors duration-300 ease-in-out active:font-bold">
          Contacts
        </li>
      </Link>
    </ul>
  );
};
