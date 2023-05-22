import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Icon, Modal, TextArea, Input } from "semantic-ui-react";

function AddPost() {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [newPost, setNewPost] = useState({});

  let { id } = useParams();

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
      <Button color="orange" size="massive" onClick={() => setFirstOpen(true)}>
        <Button.Content visible className="font-Montserrat">
          Add a new Post
        </Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>Add new Post</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <Icon name="hand point right" />
          </div>
          <Modal.Description
            className="grid gap-4 grid-cols-2"
            onChange={(e) => {
              handleNewPost(e);
            }}
          >
            <Input
              className="w-[50rem]"
              icon="v"
              iconPosition="left"
              type="text"
              placeholder="title"
              name="title"
              value={newPost.title}
            />
            <Input
              className="w-[50rem]"
              icon="v"
              iconPosition="left"
              type="text"
              placeholder="Image"
              name="img"
              value={newPost.img}
            />
            <TextArea
              className="w-[50rem]"
              placeholder="Tell us more"
              style={{ minHeight: 100 }}
              name="body"
              value={newPost.body}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Post"
            labelPosition="left"
            icon="edit"
            color="green"
            onClick={() => handleCreatePost()}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default AddPost;
