import Link from "next/link";
import React from "react";

export const HeaderNav = () => {
  return (
    <ul className="hover:primary text-secondary flex justify-between uppercase transition-colors duration-300 ease-in-out active:font-bold">
      <Link href={"#"}>
        <li>About</li>
      </Link>
      <Link href={"#"}>
        <li>Portfolio</li>
      </Link>
      <Link href={"#"}>
        <li>Contacts</li>
      </Link>
    </ul>
  );
};
