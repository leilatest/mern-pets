import React from "react";
import videobg from "../assets/videobg.mp4.mp4";
import image from "../image/logo.png";
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
          <h1 className="font-Montserrat text-cyan-950	 ">
            {" "}
            Welcome to Pet World{" "}
          </h1>
          <h4 className="font-Montserrat text-pink-400	">
            Happy pets,Happy people
          </h4>
        </div>
        <Link to="/login">
          <img
            src={image}
            className="rounded-full w-80 absolute top-1/2 right-44"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
