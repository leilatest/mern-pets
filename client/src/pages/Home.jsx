import React from "react";
import videobg from "../assets/dog_-_123590 (Original).mp4";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <video
        className="h-screen w-screen object-cover"
        src={videobg}
        autoPlay
        loop
        muted
      />
      <div>
        <div
          className=" flex flex-col justify-center items-center
         absolute top-48 right-40	gap-0  "
        >
          {" "}
          <h1 className="font-Montserrat text-black	font-bold text-orange-600 ">
            {" "}
            Welcome to Pet World{" "}
          </h1>
        </div>
        <Link to="/visitor">
          <img
            src="https://cdn-icons-png.flaticon.com/512/86/86259.png"
            className=" object-cover   w-72 absolute top-1/2 right-44    rounded-full bg-gradient-to-r from-zinc-50 to-zinc-50 hover:from-orange-600 hover:to-orange-300 "
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
