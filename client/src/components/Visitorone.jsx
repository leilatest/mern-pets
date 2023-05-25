import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

function Visitorone() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/myapp/visitor/getTPets`)
      .then((res) => setPets(res.data.data))
      .catch((err) => console.dir(err));
  }, [pets]);

  return (
    <div className=" h-screen bg-zinc-300 rounded-lg  ">
      <Card.Group>
        {pets.map((pet) => (
          <Card.Content className="   w-[12rem] h-[10rem] 	m-10  ">
            <Card color="grey" key={pet._id}>
              <Image className=" h-[11rem] object-fill" src={pet.petImg} />

              <Card.Header>{pet.type}</Card.Header>
              <Card.Header>{pet.petName}</Card.Header>
              <Card.Header>{pet.breed}</Card.Header>
              <Card.Header>{pet.gender}</Card.Header>
              <Card.Header>{pet.vaccination}</Card.Header>
              <Card.Header>{pet.age}</Card.Header>
            </Card>
          </Card.Content>
        ))}
      </Card.Group>
    </div>
  );
}

export default Visitorone;
