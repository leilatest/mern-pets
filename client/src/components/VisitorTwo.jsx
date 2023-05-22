import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Item } from "semantic-ui-react";

function VisitorTwo() {
  const [posts, setPosts] = useState([]);
  let { id } = useParams();
  console.log(posts);
  useEffect(() => {
    axios
      .get(`/api/myapp/getPostsVisitor/${id}`)
      .then((res) => setPosts(res.data.data))
      .catch((err) => console.dir(err));
  }, [posts, id]);

  return (
    <div className=" h-full bg-zinc-300 col-span-3 rounded-lg ">
      <div className="    bg-white rounded-lg mt-2 mr-2 ml-2 ">
        <Item.Group divided>
          {posts.map((post) => (
            <Item className="grid content-center gap-6 m-auto " key={post._id}>
              <Item.Image className="scroll-pl-6" src={post.img} />

              <div className="flex flex-col items-center w-screen gap-1">
                <Item.Header as="h1"> {post.title}</Item.Header>

                <Item.Meta as="h6" >
                  {post.createdAt}
                </Item.Meta>

                <Item.Description>{post.body}</Item.Description>
              </div>
            </Item>
          ))}
        </Item.Group>
      </div>
    </div>
  );
}

export default VisitorTwo;
