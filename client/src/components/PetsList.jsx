import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Card, Form, Image, Input, Modal } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";

function PetsList() {
  const [pets, setPets] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [petId, setPetId] = useState("");
  const [updatePet, setUpdatePet] = useState({});
  const [open, setOpen] = React.useState(false);
  let { id } = useParams();
  const [newPet, setNewPet] = useState({});

  useEffect(() => {
    axios
      .get(`/api/myapp/pets/${id}`)
      .then((res) => setPets(res.data.data))
      .catch((err) => console.dir(err));
  }, [pets, id, newPet]);

  const handleShow = (pet_id) => {
    setShowUpdate(!showUpdate);
    setPetId(pet_id);
  };

  const handleChange = (e) => {
    setUpdatePet({ ...updatePet, [e.target.name]: e.target.value });
  };
  const handleAddPet = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };
  const handleSave = (user_id) => {
    axios
      .put(`/api/myapp/updatePet/${user_id}`, updatePet)
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        setShowUpdate(!showUpdate);
      })
      .catch((err) => console.dir(err));
  };

  const handleRegister = () => {
    axios
      .post("/api/myapp/addPets")
      .then((res) => {
    console.log(res);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  
  return (
    <div className="  col-span-2 bg-gray-100">
      <Card.Group>
        {pets.map((pet) => (
          <Card key={pet._id}>
            <Image className="h-64 object-cover" src={pet.petImg} />

            <Card.Content>
              {showUpdate && petId === pet._id ? (
                <Form
                  className="flex flex-col  justify-center"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.age}
                    type="text"
                    placeholder="age"
                    name="age"
                  />
                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.petImg}
                    type="text"
                    placeholder="petImg"
                    name="petImg"
                  />
                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.vaccination}
                    type="text"
                    placeholder="vaccination"
                    name="vaccination"
                  />

                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.grooming}
                    type="date"
                    placeholder="grooming"
                    name="grooming"
                  />
                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.veterinarian}
                    type="text"
                    placeholder="veterinarian"
                    name="veterinarian"
                  />
                </Form>
              ) : (
                <div className="flex flex-col ">
                  <Card.Header>{pet.petName}</Card.Header>
                  <Card.Meta>{pet.breed}</Card.Meta>
                  <Card.Description>
                    <span>Age:{pet.age}</span>
                    <br />
                    <span>Vaccination:{pet.vaccination}</span>
                    <br />
                    <span>Grooming:{pet.grooming}</span>
                    <br />
                    <span> Veterinarian:{pet.veterinarian}</span>
                    <br />
                  </Card.Description>
                </div>
              )}
            </Card.Content>

            <Card.Content extra>
              {showUpdate && petId === pet._id ? (
                <div className="ui two buttons   gap-1">
                  <Button
                    basic
                    color="teal"
                    onClick={() => handleSave(pet._id)}
                  >
                    Save
                  </Button>
                  <Button basic color="red" onClick={() => handleShow(pet._id)}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="ui two buttons   gap-1">
                  <Button
                    basic
                    color="green"
                    onClick={() => handleShow(pet._id)}
                  >
                    Update
                  </Button>
                  <Button basic color="red">
                    Delete
                  </Button>
                </div>
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>

      <>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Add Pets </Button>}
        >
          <Modal.Content>
            <Form
              onChange={(e) => {
                handleAddPet(e);
              }}
            >
              <Form.Input
                label="petName"
                placeholder="petName"
                name="petName"
              />
              <Form.Input label="breed" placeholder="breed" name="breed" />
              <Form.Input
                label="vaccination"
                placeholder="vaccination"
                name="vaccination"
              />
              <Form.Input
                label="grooming"
                placeholder="grooming"
                name="grooming"
              />
              <Form.Input
                label="veterinarian"
                placeholder="veterinarian"
                name="veterinarian"
              />
              <Form.Input label="age" placeholder="age" name="age" />
              <Form.Input label="petImg" placeholder="petImg" name="petImg" />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color="grey"
              content="Save"
              onClick={() => {
                handleRegister();
              }}
            />
          </Modal.Actions>
        </Modal>
      </>

      <>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </>
    </div>
  );
}

export default PetsList;
