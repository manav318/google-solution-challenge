import React from "react";
import Logo from "./Logo.jsx";
import NavOptions from "./NavOptions";

const Navbar = () => {
    return (
        <nav className="fixed h-[6vh] top-0 left-0 flex px-[1vw] items-center justify-between bg-black bg-opacity-60 font-semibold w-full z-50 drop-shadow-2xl">
            <Logo />
            <NavOptions />
        </nav>
    );
};

export default Navbar;