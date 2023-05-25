import React, { useState } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Message,
} from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  console.log(newUser);
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    setLoading(true);

    axios
      .post("/api/myapp/register", newUser)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.response.data.error);

        console.dir(err);
      });
  };

  return (
    <div className=" grid grid-cols-8 gap-4 bg-gradient-to-r from-orange-700 to-orange-300">
      <div className="col-span-2">
        <img
          className="bg-cover h-screen flex content-center object-cover	 "
          src={require("../image/pets1.png")}
          alt="pets"
        />
      </div>

      <div className="bg-gradient-to-r from-zinc-300   to-transparent  rounded-lg col-span-6   m-auto  p-5 w-2/3 ">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {" "}
                <div className="flex flex-row">
                  <Form.Input
                    type="radio"
                    value="true"
                    label="User"
                    placeholder="user"
                    name="isUser"
                  />
                  <Form.Input
                    type="radio"
                    value="true"
                    label="Admin"
                    placeholder="admin"
                    name="isAdmin"
                  />
                </div>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Name"
                  placeholder="userName"
                  name="userName"
                  error={errorMsg.includes("UserName") && errorMsg}
                />
                <Form.Input
                  icon="mail"
                  iconPosition="left"
                  label="email"
                  placeholder="email"
                  name="email"
                  error={errorMsg.includes("e-mail") && errorMsg}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="password"
                  placeholder="password"
                  name="password"
                  type="password"
                  error={errorMsg.includes("password") && errorMsg}
                />
                <Form.Input
                  icon="phone"
                  iconPosition="left"
                  label="phone"
                  placeholder="phone"
                  name="phone"
                  error={errorMsg.includes("phone") && errorMsg}
                />
                <Form.Input
                  icon="address card"
                  iconPosition="left"
                  label="address"
                  placeholder="address"
                  name="address"
                  error={errorMsg.includes("address") && errorMsg}
                />
                <Form.Input
                  icon="picture"
                  iconPosition="left"
                  label="image"
                  type="text"
                  name="userImg"
                />
                <Button
                  content="Save"
                  primary
                  loading={loading}
                  onClick={() => {
                    handleRegister();
                  }}
                />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Link to="/login">
                <Button content="Login now " icon="signup" size="big" />
              </Link>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
        {errorMsg.includes("Email") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Register;
