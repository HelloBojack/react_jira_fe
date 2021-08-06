import React from "react";
import Login from "pages/Login";
import "./App.css";
import { useAuth } from "context/auth_context";
import Index from "pages/Index";

const App = () => {
  let { user } = useAuth();
  return <>{user ? <Index /> : <Login />}</>;
};

export default App;
