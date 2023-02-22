import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const PostUpdateForm = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Title"
      name="Title"
      rules={[
        {
          message: "Title!",
        },
      ]}
    >
      <Input type="text" name="title" />
    </Form.Item>
    <Form.Item
      label="Desc"
      name="username"
      rules={[
        {
          message: "Please input your username!",
        },
      ]}
    >
      <Input type="text" name="des" />
    </Form.Item>

    <Form.Item
      label="Desc"
      name="username"
      rules={[
        {
          message: "Please input your username!",
        },
      ]}
    >
      <Input type="text" name="des" />
    </Form.Item>

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
);
export default PostUpdateForm;
