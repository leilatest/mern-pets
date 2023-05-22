import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";

function Users() {
  const [users, setUsers] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/myapp/ListUsers/${id}`)
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.dir(err));
  }, [users, id]);
  return (
    <div>
      <Card.Group className="flex flex-col  items-center 	">
        {users.map((user) => (
          <Card className=" absolute top-3 w-screen " key={user._id}>
            <Card.Content className="h-[7em]    ">
              <Image
                className="w-24 object-cover"
                floated="right"
                src={user.userImg}
              />
              <div className="flex  flex-col  place-items-start		">
                <Card.Header> {user.userName}</Card.Header>
                <Card.Meta>Email :{user.email} </Card.Meta>
                <Card.Meta>Address :{user.address}</Card.Meta>
                <Card.Meta>Phone :{user.phone}</Card.Meta>
              </div>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}

export default Users;
