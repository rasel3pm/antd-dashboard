import React from "react";
import { Button, Form, Input, Upload } from "antd";
const { TextArea } = Input;

const CreatePost = () => {
  return (
    <div>
      <h1>Create Post</h1>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item>
          <Input type="text" placeholder="Title" />
        </Form.Item>

        <Form.Item>
          <TextArea rows={4} placeholder="Please input your description" />
        </Form.Item>
        <br />

        <Upload>
          <Button>Upload</Button>
        </Upload>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
