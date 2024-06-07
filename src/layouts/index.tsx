import { useState } from "react";
import type { WithRouterProps } from "next/dist/client/with-router";
import type { Router } from "next/router";
import { withRouter } from "next/router";
import { Button, Layout, Menu, theme } from "antd";

const { Sider, Content, Header } = Layout;

interface Props extends WithRouterProps {
  router: Router;
}

const MainLayout = (props: React.PropsWithChildren<Props>) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              // icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              // icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              // icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? "Close" : "Open"}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(MainLayout);
