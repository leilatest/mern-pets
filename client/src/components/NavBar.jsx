/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import image from "../image/logonavbar.png";

function NavBar() {
  return (
    <header>
      <nav class=" h-[76px] bg-gradient-to-r from-zinc-200 from-10% via-zinc-300 via-30% to-zinc-500 to-80%  flex justify-between py-3 px-5 ">
        <div class="flex items-center space-x-5  ">
          <i class="fa-solid fa-bars"></i>
          <Link to="/">
            <img src={image} className=" w-[145px] object-cover " />
          </Link>
        </div>

        <div className=" flex gap-5 mx-10 my-2">
          <button class=" w-[7rem] h-[3rem] px-5 py-2 rounded-full bg-zinc-200 bg-gradient-to-r from-zinc-200 from-30% to-orange-600 from-70% hover:from-zinc-200  ">
            <Link
              to="/visitor"
              class="text-zinc-500 font-bold font-serif text-lg  no-underline flex row-reverse items-center gap-[5px] "
            >
              {" "}
              Home
            </Link>
          </button>
          <button class=" w-[7rem] h-[3rem] px-5 py-2 rounded-full bg-zinc-200 bg-gradient-to-r from-zinc-200 from-30% to-orange-600 from-70% hover:from-zinc-200  ">
            <Link
              to="/login"
              class="text-zinc-500 font-bold font-serif text-lg  no-underline flex row-reverse items-center gap-[5px] "
            >
              {" "}
              Login
            </Link>
          </button>
          <button class=" w-[7rem] h-[3rem] px-5 py-2 rounded-full bg-zinc-200 bg-gradient-to-r from-zinc-200 from-30% to-orange-600 from-70% hover:from-zinc-200  ">
            <Link
              to="/"
              class="text-zinc-500 font-bold no-underline font-serif text-lg flex row-reverse items-center gap-[5px] "
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
