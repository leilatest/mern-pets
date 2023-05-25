import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Item, Button } from "semantic-ui-react";
import PetsAdoption from "./PetsAdoption";

function GetPost() {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  const [deletePost, setDeletePost] = useState(false);
  useEffect(() => {
    axios
      .get(`/api/myapp/admin/ListPosts/${id}`)
      .then((res) => setPosts(res.data.data))
      .catch((err) => console.dir(err));
  }, [posts, id]);
  console.log(posts);

  const handleDelete = (postId) => {
    axios
      .delete(`/api/myapp/post/deletePost/${postId}`)
      .then((res) => {
        if (res) {
          setDeletePost(true);
          console.log(deletePost);
        }
      })
      .catch((err) => console.dir(err));
  };

  return (
    <div className="    bg-white mt-2 mr-2 ml-2  ">
      <div>
        <PetsAdoption/>
      </div>
      <Item.Group divided>
        {posts.map((post) => (
          <Item key={post._id}>
            <Item.Image className="object-cover h[7rem]  " src={post.img} />

            <div className="flex flex-col  items-start w-screen gap-[2]">
              <Item.Header> Title :{post.title}</Item.Header>
              <Item.Description>
                UserName :{post.userId.userName}
              </Item.Description>
              <Item.Meta>Create :{post.createdAt}</Item.Meta>
              <Item.Meta>Update :{post.updatedAt}</Item.Meta>
              <Item.Description>{post.body}</Item.Description>
            </div>
            <Item.Extra>
              <div>
                <Button
                  floated="right"
                  circular
                  icon="trash "
                  color="red"
                  onClick={() => handleDelete(post._id)}
                />{" "}
              </div>
            </Item.Extra>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
}

export default GetPost;
