import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-200 shadow-md fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl rounded-xl">
            <div className="container mx-auto flex items-center justify-between px-4 py-5">
                <ul className="hidden md:flex space-x-36 text-xl font-poppins font-light justify-center w-full">
                    <li>
                        <a href="#" className="text-gray-800 hover:font-medium font-poppins">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:font-medium font-poppins">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:font-medium font-poppins">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:font-medium font-poppins">
                            Contacts
                        </a>
                    </li>
                </ul>
                <button
                    className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 font-poppins"
                    onClick={() => {
                        const menu = document.getElementById("mobile-menu");
                        menu.classList.toggle("hidden");
                    }}
                >
                    Menu
                </button>
            </div>
            <ul id="mobile-menu" className="md:hidden hidden space-y-4 px-4 py-2 bg-gray-200">
                <li>
                    <a href="#" className="block text-gray-800 hover:font-medium font-poppins">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="block text-gray-800 hover:font-medium font-poppins">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="block text-gray-800 hover:font-medium font-poppins">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" className="block text-gray-800 hover:font-medium font-poppins">
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
