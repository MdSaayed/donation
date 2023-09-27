import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineClose } from 'react-icons/ai';






const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false);

    return (
        <div className="max-w-6xl mx-auto z-50">
            <nav className="flex justify-between items-center py-4 px-2 lg:px-0">
                <Logo />

                <ul className="lg:hidden relative">
                    <li id="nav-btn" onClick={() => setNavMenu(!navMenu)} className="cursor-pointer"><TbMenu2 /></li>
                    <ul id="resposive-menu" className={navMenu ? "flex flex-col gap-4 items-center justify-center bg-black absolute -top-5 right-0 text-white font-medium w-[300px] h-[100vh] z-50" : ' -mr-[1000px] hidden'}>
                        <AiOutlineClose onClick={() => setNavMenu(!navMenu)} className="text-[#fff] fon-blod absolute top-2 left-2 cursor-pointer" />
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#ffffff]"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donate"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#ffffff]"}
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/chart"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#ffffff]"}
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </ul>

                <ul className="flex gap-8 text-blue-800 font-medium hidden lg:flex ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#0B0B0B]"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donate"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#0B0B0B]"}
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/chart"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#0B0B0B]"}
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;