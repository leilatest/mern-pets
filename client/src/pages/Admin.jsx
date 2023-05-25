/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavBar from "../components/NavBar";
import Users from "../components/Users";
import GetPost from "../components/GetPosts";
import { Form, Button } from "semantic-ui-react";


function Admin() {
  const [user, setUser] = useState({});
  const [newPost, setNewPost] = useState({});

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/myapp/${id}`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.dir(err));
  }, [user, id]);
  const handleNewPost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  const handleCreatePost = () => {
    axios
      .post(`/api/myapp/post/addPost/${id}`, newPost)
      .then((res) => {
        if (res) {
          console.log(res);
        }
        setNewPost({
          title: "",
          body: "",
          img: "",
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err.response.data.error);
        }
      });
  };

  return (
    <div>
      <NavBar />
      <div className=" grid grid-cols-8 gap-5 mr-2 ml-2 mt-2 h-screen bg-neutral-50 ">
        <div className=" col-span-2   ">
          <div
            key={user._id}
            className="bg-gradient-to-r from-zinc-200 to-zinc-300 h-40 mt-4  mb-10 rounded-full flex flex-row justify-evenly 	items-center		 "
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
          </div>

          <div className=" bg-zinc-200 flex 	rounded-lg">
            <Form
              className="w-screen m-5"
              onChange={(e) => {
                handleNewPost(e);
              }}
            >
              <Form.Input
                fluid
                label="Title"
                placeholder="Title"
                name="title"
                value={newPost.title}
              />
              <Form.Input
                fluid
                label="Image"
                placeholder="Image"
                name="img"
                value={newPost.img}
              />
              <Form.TextArea
                label="Body"
                placeholder="Body............."
                name="body"
                value={newPost.body}
              />
              <Button
                content="Post"
                labelPosition="left"
                icon="edit"
                color="green"
                onClick={() => handleCreatePost()}
              />
            </Form>
          </div>
        </div>
        <div className="bg-zinc-200 col-span-4  mt-4 mb-4	rounded-lg ">
          <GetPost />
        </div>
        <div className="bg-zinc-200 col-span-2  mt-4 mb-4 rounded-lg	 ">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default Admin;
