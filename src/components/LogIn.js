import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const testToasty = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const eventHadaler = (e) => {
    let data = { ...login };
    data[e.target.name] = e.target.value;
    setLogin(data);
  };
  const loginhandelar = (e) => {
    e.preventDefault();
    // e.target.reset();
    axios
      .post("/login", login)
      .then((data) => {
        if (data.data.access_token) {
          localStorage.getItem("token", data.access_token);
          navigate("/Users", { replace: true });
        } else {
          console.log("Error");
        }
      })

      .catch((err) => {
        toast.success(`Email or password is not currect`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="logIn_form">
      <Form
        onClick={loginhandelar}
        name="normal_login"
        className="login-form form_container"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            onChange={(e) => eventHadaler(e)}
            name="email"
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            onChange={(e) => eventHadaler(e)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>

          <Button type="link">
            <Link to="/register">Register</Link>
          </Button>

          <Button onClick={testToasty}>Test Button</Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
