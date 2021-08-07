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
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import HeaderPro from "./components/HeaderPro";
import ProjectList from "pages/ProjectList";
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const Index = () => {
  return (
    <Layout>
      <HeaderPro />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: "80vh",
              background: "#fff",
            }}
          >
            <ProjectList />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Create by Bojack @2021
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Index;
