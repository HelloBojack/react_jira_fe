// import React from "react";
// import ProjectList from "pages/ProjectList";
// import { useAuth } from "context/auth_context";
// import { Button } from "antd";
// const Index = () => {
//   const { user, logout } = useAuth();
//   return (
//     <>
//       <div>欢迎你{user?.name}</div>
//       <Button onClick={logout}>登出</Button>
//       <ProjectList />
//     </>
//   );
// };
// export default Index;
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import HeaderPro from "./components/HeaderPro";

const { Content, Footer, Sider } = Layout;

const Index = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderPro />
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: "100vh", background: "#fff" }}>
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2021 Created by Bojack</Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
