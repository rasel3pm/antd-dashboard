import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
const { TextArea } = Input;
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });
  const dataCatch = (e) => {
    if (e.target.neme === "image") {
      let reader = new FileReader();

      reader.onload = () => {
        let data = { ...post };
        data[e.target.name] = reader.result;
        setPost(data);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      let data = { ...post };
      data[e.target.name] = e.target.value;
      setPost(data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const option = {
      headers: {
        Authorization: `${localStorage.getItem("access_token")}`,
        Accept: `application/json`,
      },
    };
    axios
      .post("/create-post", post, option)
      .then((res) => {
        // toast.success(`Email or password is not currect`, {
        //   position: "top-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        console.log("post created", res);
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
        <Form.Item>
          <Input type="file" name="image" onChange={(e) => dataCatch(e)} />
        </Form.Item>

        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreatePost;
