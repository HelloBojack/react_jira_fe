import styled from "@emotion/styled";
import { Button, Popover } from "antd";
import { Header } from "antd/lib/layout/layout";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { useAuth } from "context/auth_context";
import React from "react";
const HeaderPro = () => {
  const { user, logout } = useAuth();
  const exButton = (
    <Button type="link" onClick={logout}>
      登出
    </Button>
  );
  return (
    <>
      <StyledHeader>
        <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
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
  justify-content: space-between;
  align-items: center;
`;
export default HeaderPro;
