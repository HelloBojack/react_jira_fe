import styled from "@emotion/styled";
import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { useAuth } from "context/auth_context";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const HeaderPro = () => {
  const { user, logout } = useAuth();
  let navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="link"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          登出
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <SoftwareLogo
            width={"18rem"}
            color={"rgb(38, 132, 255)"}
            onClick={() => navigate("/")}
          />
          <Menu mode="horizontal">
            <Menu.Item key="1">
              <Link to={"/projects"}>项目列表</Link>
            </Menu.Item>
          </Menu>
        </StyledDiv>
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
  box-shadow: rgba(0, 0, 0, 0.06) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.03) 0px 2px 4px -1px;
`;
const StyledDiv = styled.div`
  display: flex;
`;
export default HeaderPro;
