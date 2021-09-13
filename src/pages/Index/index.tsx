import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import HeaderPro from "./components/HeaderPro";
import ProjectList from "pages/ProjectList";
import ProjectPage from "pages/ProjectPage";
import UseUndoPage from "pages/UseUndoPage";
// import { Useref } from "pages/TestPage/Useref";
// import { TestPage } from "pages/TestPage";
// const { SubMenu } = Menu;
const { Footer } = Layout;

const Index = () => {
  return (
    <Layout>
      <Router>
        <HeaderPro />
        <Layout
          style={{
            margin: "24px 24px 0 24px",
            minHeight: "84vh",
            background: "#fff",
            padding: "24px 0",
          }}
        >
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
          <Routes>
            <Route path={"/projects"} element={<ProjectList />} />
            <Route path={"/project/:id/*"} element={<ProjectPage />} />
            <Route path={"/UseUndoPage"} element={<UseUndoPage />} />
            <Navigate to={"/projects"} replace={true} />
          </Routes>

          {/* <Useref></Useref> */}
          {/* <ProjectList /> */}
          {/* <TestPage></TestPage> */}
        </Layout>
      </Router>
      <Footer style={{ textAlign: "center" }}>Create by Bojack @2021</Footer>
    </Layout>
  );
};

export default Index;
