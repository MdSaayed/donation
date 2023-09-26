import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="max-w-6xl mx-auto z-50">
            <nav className="flex justify-between items-center py-4">
                <Logo />

                <ul className="lg:hidden relative">
                    <li id="nav-btn">close</li>
                    <ul id="resposive-menue" className="flex flex-col gap-4 -mr-[1000px] items-center justify-center bg-black absolute top-0 right-0 text-white font-medium w-[300px] h-[100vh] z-50">
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
                                to="/donation"
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
                            to="/donation"
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