import React, { useState } from "react";
import Link from "next/link";

interface DynamicDropdownProps {
  links: { href: string; label: string }[];
}

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({ links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Menu</button>
      {isDropdownOpen && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DynamicDropdown;
