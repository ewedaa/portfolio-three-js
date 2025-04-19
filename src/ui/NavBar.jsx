import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => {
        return (
          <li key={item.id} className="nav-li">
            <a onClick={() => {}} href={item.href} className="nav-li_a">
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-white bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            DVM Ewida
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <nav className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"} `}>
        <NavItems />
      </nav>
    </header>
  );
}

export default NavBar;
