import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Nave() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMouseOver = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-slate-100 sticky top-0 z-50">
      {/* Logo */}
      <img className="w-14" src="/upLogo.png" alt="Logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium relative">
        {/* Why Transco */}
        <li
          className="relative"
          onMouseOver={() => handleMouseOver("transco")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Why Transco <FaChevronDown className="text-xs mt-1" />
          </button>
          {openMenu === "transco" && (
            <DropdownMenu
              items={["Home", "Shop", "Products", "Accessories", "Contact"]}
            />
          )}
        </li>

        {/* Company */}
        <li
          className="relative"
          onMouseOver={() => handleMouseOver("company")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Company <FaChevronDown className="text-xs mt-1" />
          </button>
          {openMenu === "company" && (
            <DropdownMenu items={["About", "Careers", "Partners", "Blog"]} />
          )}
        </li>

        {/* Resources */}
        <li
          className="relative"
          onMouseOver={() => handleMouseOver("resources")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            Resources <FaChevronDown className="text-xs mt-1" />
          </button>
          {openMenu === "resources" && (
            <DropdownMenu items={["Docs", "API", "Tutorials", "Community"]} />
          )}
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Dropdown */}
        <li
          className="relative list-none hidden md:block"
          onMouseOver={() => handleMouseOver("language")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            EN <FaChevronDown className="text-xs mt-1" />
          </button>
          {openMenu === "language" && (
            <DropdownMenu
              items={["Dari", "Pashto", "Farsi", "Arabic", "Chinese"]}
            />
          )}
        </li>

        {/* Buttons */}
        <button className="hidden md:block border border-black px-4 py-1 rounded-3xl hover:bg-gray-100 transition">
          Log in
        </button>
        <button className="hidden md:block bg-blue-500 text-white px-6 py-1 rounded-3xl hover:bg-blue-600 transition">
          Get Started for Free
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden animate-fadeIn">
          <ul className="flex flex-col text-gray-700 font-medium">
            {["Why Transco", "Company", "Resources"].map((item) => (
              <li
                key={item}
                className="px-6 py-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer"
              >
                {item}
              </li>
            ))}
            <li className="px-6 py-3 border-b border-gray-100">EN</li>
            <div className="flex flex-col gap-2 px-6 py-3">
              <button className="border border-black px-4 py-1 rounded-3xl hover:bg-gray-100 transition">
                Log in
              </button>
              <button className="bg-blue-500 text-white px-6 py-1 rounded-3xl hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

// ✅ Reusable Dropdown Menu Component
function DropdownMenu({ items }) {
  return (
    <div className="absolute top-8 left-0 bg-white rounded-lg shadow-lg border border-gray-100 w-44 z-50 animate-fadeIn">
      <ul className="flex flex-col py-2 text-gray-700">
        {items.map((item) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nave;
