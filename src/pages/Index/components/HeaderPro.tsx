import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { useAuth } from "context/auth_context";
const HeaderPro = () => {
  const { user, logout } = useAuth();
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={logout}>
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <StyledHeader>
        <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />

        <Dropdown overlay={menu} placement="bottomCenter">
          <Button type="link">Hi,{user?.name}</Button>
        </Dropdown>
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
