import React from "react";
import ProjectList from "pages/ProjectList";
import { useAuth } from "context/auth_context";
import { Button } from "antd";
const Index = () => {
  const { user, logout } = useAuth();
  return (
    <>
      <div>欢迎你{user?.name}</div>
      <Button onClick={logout}>登出</Button>
      <ProjectList />
    </>
  );
};
export default Index;
