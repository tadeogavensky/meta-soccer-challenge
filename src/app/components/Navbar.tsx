import React, { useState } from "react";

interface NavbarProps {
  onNavbarItemClick: (index: number) => void;
  activeItem: number | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavbarItemClick,
  activeItem,
}) => {
  const handleItemClick = (index: number) => {
    onNavbarItemClick(index);
  };

  return (
    <nav className="border-t-[1px] border-b-[1px] border-opacity-20 border-slate-50">
      <ul className="flex items-center justify-evenly">
        <li>
          <p
            className={`uppercase py-3 cursor-pointer font-primary text-gray-300  ${
              activeItem === 0 ? "active" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            Stats
          </p>
        </li>
        <li>
          <p
            className={`uppercase py-3 cursor-pointer font-primary text-gray-300  ${
              activeItem === 1 ? "active" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Lineup
          </p>
        </li>
        <li>
          <p
            className={`uppercase py-3 cursor-pointer font-primary text-gray-300  ${
              activeItem === 2 ? "active" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Zones
          </p>
        </li>
      </ul>
    </nav>
  );
};
