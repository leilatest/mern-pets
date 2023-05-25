import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Accordion, Icon, Form, Message } from "semantic-ui-react";

function PetsAdoption() {
  const [newPet, setNewPet] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let { id } = useParams();

  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const handleNewPet = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };
  const handleCreatePet = () => {
    axios
      .post(`/api/myapp/visitor/addpetsaddoption/${id}`, newPet)
      .then((res) => {
        if (res) {
          setSuccess(res.data.message);
        }
        setNewPet({
          petName: "",
          breed: "",
          vaccination: "",
          gender: "",
          type: "",
          age: "",
          userImg: "",
        });
      })
      .catch((err) => {
        if (err) {
          setError(err.response.data.error);
        }
      });
  };

  return (
    <Accordion>
      <Accordion.Title
        className="text-8xl font-bold font-Glegoo "
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="hand point down" />
        Add a new Pet
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <Form
          onChange={(e) => {
            handleNewPet(e);
          }}
        >
          <Form.Field className=" font-bold font-Glegoo  flex  flex-col items-center bg-slate-200 justify-center">
            <Form.Input
              width={15}
              size="big"
              label="type"
              placeholder="pet Type"
              name="type"
              value={newPet.type}
            />{" "}
            <br />
            <Form.Input
              width={15}
              size="big"
              label="Name"
              placeholder="pet Name"
              name="petName"
              value={newPet.petName}
            />{" "}
            <br />
            <Form.Input
              size="big"
              label="Breed"
              placeholder="breed"
              name="breed"
              width={15}
              value={newPet.breed}
            />{" "}
            <Form.Input
              size="big"
              label="Vaccination"
              placeholder="vaccination"
              name="vaccination"
              width={15}
              value={newPet.vaccination}
            />{" "}
            <Form.Input
              size="big"
              label="gender"
              placeholder="gender"
              name="gender"
              width={15}
              value={newPet.gender}
            />{" "}
            <Form.Input
              size="big"
              type="text"
              label="Age"
              placeholder="age"
              name="age"
              width={15}
              value={newPet.age}
            />{" "}
            <Form.Input
              size="big"
              label="Image"
              placeholder="userImg"
              name="petImg"
              width={15}
              value={newPet.petImg}
            />
          </Form.Field>
          <Button
            className=" font-bold font-Glegoo text-2xl"
            color="green"
            icon="edit"
            onClick={() => handleCreatePet()}
          >
            create
          </Button>

          {error && (
            <Message negative>
              <Message.Header>Oooops!!!</Message.Header>
              <p>{error}</p>
            </Message>
          )}
          {success && (
            <Message positive>
              <Message.Header>Oooops!!!</Message.Header>
              <p>{success}</p>
            </Message>
          )}
        </Form>
      </Accordion.Content>
    </Accordion>
  );
}

export default PetsAdoption;
