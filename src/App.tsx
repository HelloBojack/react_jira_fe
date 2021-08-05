import React from "react";
// import ProjectList from "pages/ProjectList";
// import TSTest from "pages/TSTest";
import Login from "pages/Login";
import "./App.css";
import "antd/dist/antd.css";
import { useAuth } from "context/auth_context";
import Index from "pages/Index";

const App = () => {
  let { user } = useAuth();
  return (
    <div>
      {/* <ProjectList /> */}
      {/* <TSTest /> */}
      {user ? <Index /> : <Login />}
    </div>
  );
};

export default App;
