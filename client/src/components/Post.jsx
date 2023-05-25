import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Item, Button, Form, Input, TextArea } from "semantic-ui-react";
import AddPost from "./AddPost";
import PetsAdoption from "./PetsAdoption";

function Post() {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  const [deletePost, setDeletePost] = useState(false);
  const [postId, setPostId] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [updatePost, setUpdatePost] = useState({});
  console.log(posts);

  useEffect(() => {
    axios
      .get(`/api/myapp/post/getPost/${id}`)
      .then((res) => setPosts(res.data.data))
      .catch((err) => console.dir(err));
  }, [posts, id]);
  const handleChange = (e) => {
    setUpdatePost({ ...updatePost, [e.target.name]: e.target.value });
  };
  const handleShow = (post_id) => {
    setShowUpdate(!showUpdate);
    setPostId(post_id);
  };
  const handleSave = (user_id) => {
    axios
      .put(`/api/myapp/post/updatePost/${user_id}`, updatePost)
      .then((res) => {
        console.log(res.data.status);
        setShowUpdate(!showUpdate);
      })
      .catch((err) => console.dir(err));
  };

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
    <div className=" col-span-3    ">
      <div>
        <PetsAdoption/>
    
      </div>
      <div className="bg-gradient-to-r from-zinc-50 to-zinc-50   hover:from-zinc-50 m-2 rounded-full flex justify-center items-center h-24 mb-8  ">
        <AddPost />
      </div>
      <div className="   bg-white m-2 rounded-lg ">
        <Item.Group divided>
          {posts.map((post) => (
            <Item>
              <Item.Image className="object-cover  " src={post.img} />

              <Item.Content>
                {showUpdate && postId === post._id ? (
                  <Form
                    className="flex flex-col  justify-center w-screen grip gap-3 absolute top-2 "
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <Input
                      icon="paw"
                      iconPosition="left"
                      defaultValue={post.title}
                      type="text"
                      placeholder="title"
                      name="title"
                    />
                    <Input
                      icon="paw"
                      iconPosition="left"
                      defaultValue={post.img}
                      type="text"
                      placeholder="image"
                      name="img"
                    />

                    <TextArea
                      icon="paw"
                      iconPosition="left"
                      defaultValue={post.body}
                      type="text"
                      placeholder="body"
                      name="body"
                    />
                  </Form>
                ) : (
                  <>
                    <Item.Header>{post.title}</Item.Header>

                    <Item.Description>{post.body}</Item.Description>
                  </>
                )}
              </Item.Content>
              <Item.Extra>
                {showUpdate && postId === post._id ? (
                  <div>
                    <Button
                      floated="right"
                      circular
                      icon="delete"
                      color="red"
                      onClick={() => handleShow(post._id)}
                    />
                    <Button
                      floated="right"
                      circular
                      icon="save"
                      color="green"
                      onClick={() => handleSave(post._id)}
                    />
                  </div>
                ) : (
                  <div>
                    <Button
                      floated="right"
                      circular
                      icon="delete"
                      color="red"
                      onClick={() => handleDelete(post._id)}
                    />{" "}
                    <Button
                      floated="right"
                      circular
                      icon="sync alternate"
                      color="blue"
                      onClick={() => handleShow(post._id)}
                    />
                  </div>
                )}
              </Item.Extra>
            </Item>
          ))}
        </Item.Group>
      </div>
    </div>
  );
}

export default Post;
