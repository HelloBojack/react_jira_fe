import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import HeaderPro from "./components/HeaderPro";
import ProjectList from "pages/ProjectList";
// import { Useref } from "pages/TestPage/Useref";
// import { TestPage } from "pages/TestPage";
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

const Index = () => {
  return (
    <Layout>
      <Router>
        <HeaderPro />
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="0">
                <Link to={"/projects"}>项目列表</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
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
              <Routes>
                <Route path={"/projects"} element={<ProjectList />} />
              </Routes>
              {/* <Useref></Useref> */}
              {/* <ProjectList /> */}
              {/* <TestPage></TestPage> */}
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Create by Bojack @2021
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
};

export default Index;
