import styled from "@emotion/styled";
import { Button, Popover } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useAuth } from "context/auth_context";
import React from "react";
const HeaderPro = () => {
  const { user, logout } = useAuth();
  const exButton = <Button onClick={logout}>登出</Button>;
  return (
    <>
      <StyledHeader>
        <Popover placement="bottom" content={exButton} trigger="click">
          <Button type="link">Hi,{user?.name}</Button>
        </Popover>
      </StyledHeader>
    </>
  );
};
const StyledHeader = styled(Header)`
  padding: 0 16px;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export default HeaderPro;
