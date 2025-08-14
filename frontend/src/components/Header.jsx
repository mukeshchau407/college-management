import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaUser,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { useAppContext } from "../contexts/AppContext";

const Navbar = () => {
  const {
    navigate,
    timeoutId,
    setTimeoutId,
    isOpen,
    setIsOpen,
    searchQuery,
    setSearchQuery,
    isFacultyOpen,
    setIsFacultyOpen,
  } = useAppContext();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 1000 / 5);
    setTimeoutId(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Searching for:", searchQuery);
      // Replace with actual search logic
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-12 xl:px-12 py-5 bg-white shadow-lg transition-all sticky w-full top-0 z-50">
      <NavLink to="/">
        <img src={logo} alt="College Logo" className="h-12 w-14" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-6 font-semibold uppercase">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
          }
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
          }
          to="/about"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          About
        </NavLink>

        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            Faculty
            {!isOpen ? (
              <FaAngleDown className="text-sm" />
            ) : (
              <FaAngleUp className="text-sm" />
            )}
          </NavLink>
          {isOpen && (
            <ul className="absolute top-10 right-0 w-82 bg-blue-500 text-white shadow border border-gray-200 py-2 rounded-md text-sm z-40">
              <li className="p-2 pl-4 hover:bg-red-500 cursor-pointer font-semibold">
                BCA (Bachelor of Arts in Computer Application)
              </li>
              <li className="p-2 pl-4 hover:bg-red-500 cursor-pointer font-semibold">
                BBS
              </li>
              <li className="p-2 pl-4 hover:bg-red-500 cursor-pointer font-semibold">
                BBM
              </li>
              <li className="p-2 pl-4 hover:bg-red-500 cursor-pointer font-semibold">
                BBA
              </li>
            </ul>
          )}
        </div>

        <NavLink
          to="/admission"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
          }
        >
          Admission
        </NavLink>
        <NavLink
          to="/gallery"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Right: CTA Buttons + Auth */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={() => {
            window.location.href = "/admissionForm";
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
        >
          Apply Now
        </button>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium rounded-md transition-colors">
          Visit Us
        </button>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        className="sm:hidden transition-all duration-300 cursor-pointer"
      >
        {!isOpen ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-3 px-5 text-sm md:hidden z-40">
          <NavLink
            className="block w-full text-center py-2"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="block w-full text-center py-2"
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>

          {/* Faculty Dropdown Toggle */}
          <div className="relative w-full flex flex-col items-center">
            <button
              onClick={() => setIsFacultyOpen(!isFacultyOpen)}
              className="flex items-center justify-center w-full py-2 font-medium text-gray-600 hover:text-red-500"
            >
              Faculty
              {!isFacultyOpen ? <FaAngleDown /> : <FaAngleUp />}
            </button>
            {isFacultyOpen && (
              <ul className="w-full text-center text-gray-600">
                <li className="py-2 hover:text-red-500">BCA</li>
                <li className="py-2">BBS</li>
                <li className="py-2">BBM</li>
                <li className="py-2">BBA</li>
              </ul>
            )}
          </div>

          <NavLink
            className="block w-full text-center py-2"
            to="/admission"
            onClick={() => setIsOpen(false)}
          >
            Admission
          </NavLink>
          <NavLink
            className="block w-full text-center py-2"
            to="/gallery"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            className="block w-full text-center py-2"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <div className="flex flex-col w-full gap-3 mt-2">
            <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
              Apply Now
            </button>
            <button className="w-full py-2 border border-blue-500 text-blue-500 hover:bg-blue-50 font-medium rounded-md">
              Visit Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
