import React, { useState } from "react";
import { Form, Input, Button, Card, Divider } from "antd";
import { useAuth } from "context/auth_context";
import { IUser } from "pages/ProjectList/data";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";

const Login = () => {
  const [form] = Form.useForm();
  const { login, register } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const onFinish = (values: IUser) => {
    if (isRegister) {
      register(values);
    } else {
      login(values);
    }
  };
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        <Form onFinish={onFinish} form={form}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input type="password" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {isRegister ? "注册" : "登录"}
            </Button>
          </Form.Item>
          <Divider />
          <Button type="link" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
          </Button>
        </Form>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

export default Login;
