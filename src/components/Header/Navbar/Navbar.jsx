import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div  className="max-w-6xl mx-auto z-50"> 
            <nav className="flex justify-between items-center py-4">
                <Logo />
                <ul className="flex gap-8 text-blue-800 font-medium">
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
                            to="/favorites"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#0B0B0B]"}
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-[#FF444A]" : "text-[#0B0B0B]"}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;