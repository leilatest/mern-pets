import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

function Visitorone() {
  const [pets, setPets] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/myapp/getTPets/${id}`)
      .then((res) => setPets(res.data.data))
      .catch((err) => console.dir(err));
  }, [pets, id]);

  return (
    <div className="col-span-5 h-full bg-zinc-300 rounded-lg  ">
      <Card.Group>
        {pets.map((pet) => (
          <Card.Content className="   w-[12rem] h-[10rem] justify-items-center	m-6">
            <Card color="grey" key={pet._id}>
              <Image className=" h-[11rem] object-fill" src={pet.petImg} />

              <Card.Header>{pet.petName}</Card.Header>
            </Card>
          </Card.Content>
        ))}
      </Card.Group>
    </div>
  );
}

export default Visitorone;
