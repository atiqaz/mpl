import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Link ,useParams} from "react-router-dom";
import Cookies from "js-cookie";
import { MdDashboard, MdInbox, MdLogout, MdAccountBalance } from "react-icons/md"; // Importing icons from react-icons/md
import { IoIosArrowForward } from "react-icons/io";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

function Sidenav() {
  const {id}=useParams()
  const [open, setOpen] = useState(window.innerWidth > 768); // Close by default on small screens

  const Menus = [
    { title: "Dashboard", icon: <MdDashboard size={24} />, link: "/players" }, // Using MdDashboard icon
    { title: "Teams", icon: <PiMicrosoftTeamsLogo  size={24} />, link: `/player/${id}` }, // Using MdInbox icon
    { title: "Accounts", icon: <MdAccountBalance size={24} />, gap: true, link: "/accounts" }, // Using MdAccount icon
    // { title: "Logout", icon: <MdLogout size={24} />, gap: true, }, // Using MdAccount icon
    // Add other menu items as needed
  ];

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    window.location.reload();
  };

  // Function to handle window resize and update the open state accordingly
  const handleResize = () => {
    setOpen(window.innerWidth > 768); // Close on small screens
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex ">
      <div
        className={`${
          open ? "w-60" : "w-20 "
        }  bg-slate-700 h-screen p-5  pt-8 absolute duration-300`}
      >
        <IoIosArrowForward color="white" size={'1.6em'} 
        className={`absolute cursor-pointer -right-4 top-9 w-7 h-7 border-dark-purple border
 rounded-full  ${!open && "rotate-180"}`}
         onClick={() => setOpen(!open)}
        />
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Link to={`/admin${Menu.link}`} className="flex gap-4">
                {Menu.icon} {/* Rendering icon component */}
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default Sidenav;
