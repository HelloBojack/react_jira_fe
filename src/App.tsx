import React from "react";
import Login from "pages/Login";
import "./App.css";
import { useAuth } from "context/auth_context";
import Index from "pages/Index";
import { ErrorBoundary } from "components/common";

const App = () => {
  let { user } = useAuth();
  return (
    <>
      <ErrorBoundary>{user ? <Index /> : <Login />}</ErrorBoundary>
    </>
  );
};

export default App;
