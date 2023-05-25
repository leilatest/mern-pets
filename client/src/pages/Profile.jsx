/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import axios from "axios";
import PetsList from "../components/PetsList";
import Post from "../components/Post";
import AddPet from "../components/AddPet";

function Profile() {
  const [user, setUser] = useState({});

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/myapp/${id}`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.dir(err));
  }, [user, id]);

  return (
    <>
      <NavBar />
      <div className=" grid grid-cols-8 gap-5 mr-2 ml-2 mt-2 h-screen bg-neutral-50 ">
        <div className=" col-span-2   ">
          <div
            key={user._id}
            className="bg-gradient-to-r from-zinc-200 to-zinc-300 h-40 w-[23rem] mt-4  rounded-full flex flex-row justify-evenly 	items-center		 "
          >
            <img
              className=" w-[7rem] rounded-full  object-cover "
              src={user.userImg}
            />
            <div className="flew flex-col	">
              <h5>{user.userName}</h5>
              <div className=" text-zinc-600">
                <h6>{user.address}</h6>
                <h6> {user.phone}</h6>
                <h6> {user.email}</h6>
              </div>
            </div>
            <div className=" bg-zinc-200 	rounded-lg absolute  top-80 left-5  w-[23rem]">
              <AddPet />
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 col-span-4  mt-4 mb-4	rounded-lg ">
          <Post />
        </div>

        <div className="bg-zinc-200 col-span-2  mt-4 mb-4 rounded-lg	 ">
          {" "}
          <PetsList />
        </div>
      </div>
    </>
  );
}

export default Profile;
