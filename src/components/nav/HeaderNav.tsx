import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

// TODO  доделать тут с логикой

const LINKS = [
  { id: 1, href: "#", title: "About" },
  { id: 2, href: "#", title: "Portfolio" },
  { id: 3, href: "#", title: "Contacts" },
];

export const HeaderNav = () => {
  return (
    <>
      <ul className="text-text-secondary hidden w-full justify-between text-sm uppercase sm:flex sm:text-xl">
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
          <span className="text-text-secondary hover:text-secondary text-sm uppercase transition-colors duration-300 ease-in-out active:font-bold">
            activeLink
          </span>
        </Link>

        <button
          className="text-text-secondary hover:text-secondary transition-colors duration-300 ease-in-out"
          onClick={() => console.log("Open menu")}
        >
          <HamburgerMenuIcon className="h-4 w-4" />
        </button>
      </div>
    </>
  );
};
