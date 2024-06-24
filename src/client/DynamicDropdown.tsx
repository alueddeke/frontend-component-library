"use client";
import React, { useState, ComponentType, forwardRef } from "react";

interface DynamicDropdownProps {
  links: { href: string; label: string }[];
  className?: string;
  LinkComponent?: ComponentType<any>;
}

const DynamicDropdown: React.FC<DynamicDropdownProps> = ({
  links,
  className,
  LinkComponent,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to render a link, using Next.js Link if available
  const renderLink = (href: string, label: string, index: number) => {
    if (LinkComponent) {
      return (
        <li key={index}>
          <LinkComponent href={href}>
            <a>{label}</a>
          </LinkComponent>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <a href={href}>{label}</a>
        </li>
      );
    }
  };

  return (
    <div className={className}>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Menu</button>
      {isDropdownOpen && (
        <ul>
          {links.map((link, index) => renderLink(link.href, link.label, index))}
        </ul>
      )}
    </div>
  );
};

export default DynamicDropdown;
