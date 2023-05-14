import React, { useState, useEffect } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [LoginData, setLoginData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorTime, setErrorTime] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    setLoading(true);
    axios
      .post("/api/myapp/login", LoginData)
      .then((res) => {
        if(res.data.status){
          setLoading(false);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("isUser", res.data.isUser);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("token", res.data.token);
          console.log(res);

          navigate(`/profile/${res.data.id}`);
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
    <div className="h-screen grid grid-cols-3 grid-rows-1 ">
      <div>
        <img
          className="bg-cover h-screen flex content-center object-cover	 "
          src={require("../image/pets1.png")}
          alt="pets"
        />
      </div>

      <div className="= bg-slate-50 col-span-2  m-auto w-full p-10">
        <Form
          className=" font-bold font-Glegoo"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="mb-8">
            <h5 className="inline font-bold font-Glegoo">
              You don't have an account yet ?
            </h5>{" "}
            <Link
              className=" font-bold font-Glegoo text-blue-600  visited:text-fuchsia-500	"
              to="/register"
            >
              {" "}
              Register now{" "}
            </Link>
          </div>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Email"
              type="email"
              placeholder="ex:example@ex.com"
              name="email"
            />
            <Form.Input
              label="Password"
              type="password"
              placeholder="password"
              name="password"
            />
          </Form.Group>
          <Button
            basic
            color="grey"
            content="Save"
            loading={loading}
            onClick={() => {
              handleLogin();
            }}
          />
        </Form>
        {errorTime && errorMsg.includes("Wrong") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Login;
