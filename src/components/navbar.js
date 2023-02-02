import React from "react";

const Navbar = ({ setShow, size }) => {
    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <img src="https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/05_01_2022_11_19_05_7791106.png?width=920&format=jpeg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                   title
                </span>
                <div className="cart" >
                    <span className="flex justify-end text-white space-x-4">
                        <i className="fa fa-shopping-cart"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;