import React, { useState, useEffect } from "react";
import Logo from "./Logo.jsx"; // Replace with your actual Logo component
import NavOptions from "./NavOptions"; // Replace with your actual NavOptions component

const Navbar = () => {
    const [visible, setVisible] = useState(false); // Controls navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) { // If scrolling down
                setVisible(false);
            } else { // If scrolling up
                setVisible(true);
            }
            // Update the last scroll position
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed h-[6vh] top-0 left-0 flex items-center justify-between bg-gray-700 bg-opacity-80 font-semibold w-full z-50 drop-shadow-2xl transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Logo />
            <NavOptions />
        </nav>
    );
};

export default Navbar;