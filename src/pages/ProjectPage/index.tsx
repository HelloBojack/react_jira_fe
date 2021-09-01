import { useTitle } from "utils";
import { Layout, Menu } from "antd";
import { Navigate } from "react-router";
import { Link, Route, Routes } from "react-router-dom";
import TaskBoard from "./components/TaskBoard";
const { Content, Sider } = Layout;
const ProjectList = () => {
  useTitle("项目列表");

  return (
    <Layout
      style={{
        margin: 0,
        background: "#fff",
      }}
    >
      <Sider
        style={{
          background: "#fff",
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["看板"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1">
            <Link to={"TaskBoard"}>看板</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"TaskGroup"}>任务组</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Routes>
          <Route path={"/TaskBoard"} element={<TaskBoard />} />
          {/* <Route path={"/TaskGroup"} element={<><TaskGroup/>} /> */}
          <Navigate
            to={window.location.pathname + "/TaskBoard"}
            replace={true}
          />
        </Routes>
      </Content>
    </Layout>
  );
};
export default ProjectList;
