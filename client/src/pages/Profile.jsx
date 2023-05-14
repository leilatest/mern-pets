import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
import { FaAddressCard } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import PetsList from "../components/PetsList";

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
    <div>
      <NavBar />
      <div className="grid grid-cols-4 gap-1 grid-rows-1 min-h-[630px]  ">
        <div className=" col-span-1 bg-slate-50   ">
          <>
            <Card
              color="teal"
              key={user._id}
              className=" absolute left-10 top-12 "
            >
              <Image src={user.userImg} />

              <Card.Content>
                <Card.Header>{user.userName}</Card.Header>{" "}
              </Card.Content>
              <Card.Content extra>
                <Card.Meta className="flex row-reverse items-center gap-[6px]  ">
                  {" "}
                  <FaAddressCard />
                  {user.address}
                </Card.Meta>
                <Card.Meta className="flex row-reverse items-center gap-[6px] ">
                  {" "}
                  <AiFillPhone />
                  {user.phone}
                </Card.Meta>
                <Card.Meta className="flex row-reverse items-center gap-[6px] ">
                  {" "}
                  <AiOutlineMail />
                  {user.email}
                </Card.Meta>
              </Card.Content>
            </Card>
          </>
        </div>
        <PetsList />
      </div>
    </div>
  );
}

export default Profile;
