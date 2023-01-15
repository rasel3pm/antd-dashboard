import React, { useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import axios from "axios";
const { TextArea } = Input;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
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
  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
  });
  const dataCatch = (e) => {
    let data = { ...post };
    data[e.target.name] = e.target.value;
    setPost(data);
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    axios
      .post("/create-post", post)
      .then((res) => {
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
      })
      .catch((err) => console.log("failed", err));
  };

  return (
    <div>
      <h1>Create Post</h1>

      <Form
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => dataCatch(e)}
          />
        </Form.Item>

        <Form.Item>
          <TextArea
            type="text"
            name="description"
            rows={4}
            placeholder="Please input your description"
            onChange={(e) => dataCatch(e)}
          />
        </Form.Item>

        <Form.Item>
          <Input
            type="text"
            name="category"
            placeholder="category"
            onChange={(e) => dataCatch(e)}
          />
        </Form.Item>
        <br />

        {/* <Upload>
          <Button>Upload</Button>
        </Upload> */}

        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreatePost;
