import React, { useState } from "react";
import { Button, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const eventHadaler = (e) => {
    let data = { ...signUp };
    data[e.target.name] = e.target.value;
    setSignUp(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    axios
      .post("/create-user", signUp)
      .then((data) => {
        swal("Good job!", "Account created", "success", data);
        navigate("/create-post", { replace: true });
      })
      .catch((err) => swal(err.data.message + "Account not created", "danger"));
  };
  return (
    <div>
      <h1 className="text-white">Register Account</h1>
      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <label for="name">Name</label> <br />
          <input
            onChange={(e) => eventHadaler(e)}
            name="name"
            type="text"
            placeholder="Enter name"
            className="form-control"
          />
          <br />
          <label for="Email">Email</label> <br />
          <input
            onChange={(e) => eventHadaler(e)}
            name="email"
            type="email"
            placeholder="Enter email"
            className="form-control"
          />{" "}
          <br />
          <label for="Password">Password</label> <br />
          <input
            onChange={(e) => eventHadaler(e)}
            name="password"
            type="password"
            placeholder="Enter password"
            className="form-control"
          />{" "}
          <br />
          <input
            onChange={(e) => eventHadaler(e)}
            name="avater"
            type="file"
            placeholder="Input file"
            className="form-control"
          />{" "}
          <br />
          <Space wrap>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <Link to="/login">
              <Button>login</Button>
            </Link>
          </Space>
        </form>
      </div>
    </div>
  );
};

export default Register;
