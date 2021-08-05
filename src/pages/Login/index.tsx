import React from "react";
import { Form, Input, Button } from "antd";
import { useAuth } from "context/auth_context";
import { IUser } from "pages/ProjectList/data";

const Login = () => {
  const [form] = Form.useForm();
  const { login, register } = useAuth();
  const onFinish = (values: IUser) => {
    login(values);
  };
  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  register(values);
                })
                .catch((errorInfo) => console.log(errorInfo));
            }}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
