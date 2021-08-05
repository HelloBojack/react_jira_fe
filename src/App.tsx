import React from "react";
// import TSTest from "pages/TSTest";
import Login from "pages/Login";
import "./App.css";
import "antd/dist/antd.css";
import { useAuth } from "context/auth_context";
import Index from "pages/Index";

const App = () => {
  let { user } = useAuth();
  return (
    <>
      {/* <TSTest /> */}
      {user ? <Index /> : <Login />}
    </>
  );
};

export default App;
