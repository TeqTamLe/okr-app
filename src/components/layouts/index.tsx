import { useState } from "react";
import type { WithRouterProps } from "next/dist/client/with-router";
import type { Router } from "next/router";
import { withRouter } from "next/router";
import { Layout, Menu, theme } from "antd";

import { useMenu } from "@/hooks/useMenu";

import HeaderComponent from "../common/Header";

const { Sider, Content, Header } = Layout;

interface Props extends WithRouterProps {
  router: Router;
}

const MainLayout = (props: React.PropsWithChildren<Props>) => {
  const [collapsed, setCollapsed] = useState(false);
  const { items, selectedKeys, defaultSelectedKeys } = useMenu();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(items);
  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
      }}
      className="main-container"
    >
      <Sider width={220} trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">TEQ</div>
        <Menu
          style={{ background: "#fff" }}
          mode="inline"
          selectedKeys={selectedKeys}
          defaultSelectedKeys={defaultSelectedKeys}
          items={items}
          inlineIndent={0}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
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
