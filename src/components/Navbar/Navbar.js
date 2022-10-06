import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  console.log("🚀 ~ Navbar ~ splitLocation", splitLocation);

  return (
    <div className="bg-[#251B37]">
      <nav className="container mx-auto sticky">
        <ul className="flex justify-end gap-6 font-semibold text-2xl text-[#FFCACA] py-6">
          <li className={splitLocation[1] === "" ? "active_class" : ""}>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </li>
          <li className={splitLocation[1] === "about" ? "active_class" : ""}>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li className={splitLocation[1] === "service" ? "active_class" : ""}>
            <NavLink exact to="/service">
              Service
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
