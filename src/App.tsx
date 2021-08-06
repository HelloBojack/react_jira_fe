import React from "react";
import Login from "pages/Login";
import "./App.css";
import { useAuth } from "context/auth_context";
import Index from "pages/Index";
import { Card } from "antd";
import styled from "@emotion/styled";

const App = () => {
  let { user } = useAuth();
  return (
    <Container>
      <StyledCard>{user ? <Index /> : <Login />}</StyledCard>
    </Container>
  );
};
const StyledCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vh;
`;
export default App;
