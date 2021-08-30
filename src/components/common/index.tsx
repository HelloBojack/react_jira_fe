import styled from "@emotion/styled";
import { Spin } from "antd";
import React from "react";
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FullLoading = () => {
  return (
    <FullPage>
      <Spin size="large" tip="Loading..." />
    </FullPage>
  );
};

export class ErrorBoundary extends React.Component {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: object) {
    console.log(error, errorInfo);
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>{this.state.error?.message}</h1>;
    }
    return this.props.children;
  }
}
