import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setLoading(true);

    axios
      .post("/api/myapp/register", newUser)
      .then((res) => {
        navigate("/Profile");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.response.data.error);

        console.dir(err);
      });
  };

  return (
    <div className="h-screen grid grid-cols-3 grid-rows-1 ">
      <div>
        <img
          className="bg-cover h-screen flex content-center object-cover "
          src={require("../image/pets1.png")}
          alt="pets"
        />
      </div>

      <div className="bg-slate-50 col-span-2  m-auto w-full p-10">
        <Form
          className=" font-bold font-Glegoo"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="mb-8">
            <h5 className="inline font-bold font-Glegoo">
              {" "}
              You already have an account ?
            </h5>{" "}
            <Link
              className=" font-bold font-Glegoo text-blue-600  visited:text-fuchsia-500	"
              to="/login"
            >
              {" "}
              Login now{" "}
            </Link>
          </div>

          <Form.Group unstackable widths={3}>
            <Form.Input
              label="Username"
              placeholder="Username"
              name="userName"
              error={errorMsg.includes("UserName") && errorMsg}
            />
            <Form.Input
              label="Email"
              type="email"
              placeholder="ex:example@ex.com"
              name="email"
              error={errorMsg.includes("e-mail") && errorMsg}
            />
            <Form.Input
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              error={errorMsg.includes("password") && errorMsg}
            />
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Input
              label="Phone"
              placeholder="Phone"
              name="phone"
              error={errorMsg.includes("phone") && errorMsg}
            />
            <Form.Input
              label="Address"
              placeholder="address"
              name="address"
              error={errorMsg.includes("address") && errorMsg}
            />
            <Form.Input
              label="Profile Picture"
              type="text"
              placeholder="Profile Picture"
              name="userImg"
            />
          </Form.Group>

          <Button
            basic
            color="grey"
            content="Save"
            loading={loading}
            onClick={() => {
              handleRegister();
            }}
          />
        </Form>
        {errorMsg.includes("Email") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Register;
