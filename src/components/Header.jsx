import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="flex items-center justify-between h-20">
            <img src={logo} alt="brand-logo" className="cursor-pointer" />
            <div className="w-12 h-12 object-cover rounded-full overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    );
};

export default Header;
