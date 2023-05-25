import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Message,
} from "semantic-ui-react";

function Login() {
  const [LoginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorTime, setErrorTime] = useState(false);
console.log(LoginData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/api/myapp/login", LoginData)
      .then((res) => {
        if (res.data.isUser === true && res.data.isAdmin === false) {
          setLoading(false);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("isUser", res.data.isUser);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("token", res.data.token);
          console.log(res);

          navigate(`/profile/${res.data.id}`);
        } else {
          setLoading(false);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("isUser", res.data.isUser);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("token", res.data.token);
          console.log(res);

          navigate(`/admin/${res.data.id}`);
        }
      })
      .catch((err) => {
        if (err.response.data.message) {
          setLoading(false);
          setErrorMsg(err.response.data.message);
          setErrorTime(true);
          console.dir(err);
        }
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setErrorTime(false);
    }, 10000);
  }, [errorTime]);
  return (
    <div className=" grid grid-cols-8 gap-4 bg-gradient-to-r from-orange-700 to-orange-300">
      <div className="col-span-2">
        <img
          className="bg-cover h-screen flex content-center object-cover	 "
          src={require("../image/pets1.png")}
          alt="pets"
        />
      </div>

      <div className="=  bg-gradient-to-r from-zinc-300  rounded-lg col-span-6  m-auto  p-5 w-2/3 ">
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Email"
                  placeholder="Email"
                  name="email"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  name="password"
                />
                <Button
                  content="login"
                  primary
                  loading={loading}
                  onClick={() => {
                    handleLogin();
                  }}
                />{" "}
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Link to="/register">
                <Button content="Register now" icon="signup" size="big" />
              </Link>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
        {errorTime && errorMsg.includes("Wrong") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Login;
