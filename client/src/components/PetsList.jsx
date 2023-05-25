import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button, Card, Form, Image, Input } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";

function PetsList() {
    let { id } = useParams();
  const [pets, setPets] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [petId, setPetId] = useState("");
  const [updatePet, setUpdatePet] = useState({});
  const [deletePet, setDeletePet] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/myapp/pets/${id}`)
      .then((res) => setPets(res.data.data))
      .catch((err) => console.dir(err));
  }, [pets, id, updatePet]);

  const handleShow = (pet_id) => {
    setShowUpdate(!showUpdate);
    setPetId(pet_id);
  };

  const handleChange = (e) => {
    setUpdatePet({ ...updatePet, [e.target.name]: e.target.value });
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

  const handleDelete = (petId) => {
    axios
      .delete(`/api/myapp/deletePet/${petId}`)
      .then((res) => {
        if (res) {
          setDeletePet(true);

          toast.success("Pet has been deleted", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => console.dir(err));
  };

  return (
    <div>
      <Card.Group className="flex flex-col  items-center 	rounded-lg ">
        {pets.map((pet) => (
          <Card className=" absolute top-2 w-screen rounded-lg " key={pet._id}>
            <Card.Content    >
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
                    defaultValue={pet.petName}
                    type="text"
                    placeholder="petName"
                    name="petName"
                  />
                  <Input
                    icon="paw"
                    iconPosition="left"
                    defaultValue={pet.breed}
                    type="text"
                    placeholder="breed"
                    name="breed"
                  />
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
                <div>
                  <Image className="h-64 object-cover" src={pet.petImg} />

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
                  <Button
                    basic
                    color="red"
                    onClick={() => handleDelete(pet._id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
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
        {deletePet && (
          <ToastContainer
            position="top-right"
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
        )}
      </>
    </div>
  );
}

export default PetsList;
