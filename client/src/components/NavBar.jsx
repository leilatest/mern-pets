/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import image from "../image/logonav.png.png";

function NavBar() {
  return (
    <header>
      <nav class=" h-[76px] bg-gradient-to-r from-sky-500 to-indigo-500 text-white flex justify-between items-center py-3 px-5 ">
        <div class="flex items-center space-x-5  ">
          <i class="fa-solid fa-bars"></i>
          <Link to="/home">
            <img src={image} className=" w-[108px] w-[108px] object-cover " />
          </Link>
        </div>

        <div class="flex items-center space-x-5 text-base ">
          <i class="fa-solid fa-user"></i>

          <button class=" border border-gray-300 px-5 py-2 rounded-full font-bold  hover:bg-sky-50">
            <Link
              to="/login"
              class="text-white font-bold text-lg no-underline flex row-reverse items-center gap-[5px] "
            >
              {" "}
              Logout
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
