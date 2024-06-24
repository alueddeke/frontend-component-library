import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

interface NavbarProps {
  links: { href: string; label: string }[];
  dropdownLinks: { href: string; label: string }[];
}

const DynamicDropdown = dynamic(() => import("../client/DynamicDropdown"), {
  ssr: false,
});

const Navbar: React.FC<NavbarProps> = ({ links, dropdownLinks }) => (
  <nav>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} legacyBehavior>
            <a>{link.label}</a>
          </Link>
        </li>
      ))}
      <li>
        <DynamicDropdown links={dropdownLinks} LinkComponent={Link} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
