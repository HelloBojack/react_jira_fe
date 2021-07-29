import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
interface IForm {
  username: string;
  password: string;
}
const Login = () => {
  const onFinish = (values: IForm) => {
    console.log(values);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(async (res) => {
      if (res.ok) {
        console.log(await res.json());
      }
    });
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item label="username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
