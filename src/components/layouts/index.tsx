import { useState } from "react";
import type { WithRouterProps } from "next/dist/client/with-router";
import type { Router } from "next/router";
import { withRouter } from "next/router";
import { Layout, Menu, theme } from "antd";

import { useMenu } from "@/hooks/useMenu";
import { UserAddOutlined } from "@ant-design/icons";

import HeaderComponent from "../common/Header";

const { Sider, Content, Header } = Layout;

interface Props extends WithRouterProps {
  router: Router;
}
interface DataItem {
  key: string;
  icon: React.ElementType;
}

// Define the SubMenu interface
interface SubMenu {
  new: DataItem[];
}
type SubMenuKeys = keyof SubMenu;

const MainLayout = (props: React.PropsWithChildren<Props>) => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("");
  const { items, selectedKeys, defaultSelectedKeys } = useMenu();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const subMenu: SubMenu = {
    new: [
      {
        key: "OKR",
        icon: UserAddOutlined,
      },
      {
        key: "User",
        icon: UserAddOutlined,
      },
      {
        key: "Team",
        icon: UserAddOutlined,
      },
    ],
  };
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
          onClick={(e) => (e.key === key ? setKey("") : setKey(e.key))}
        />
        <div>
          {key === "new" && (
            <div>
              {subMenu[key as SubMenuKeys]?.map((keys: DataItem) => {
                const Icon = keys.icon as
                  | React.ElementType<unknown>
                  | undefined;
                return (
                  <div style={{ display: "flex" }} key={keys.key}>
                    <div>{Icon ? <Icon /> : undefined}</div>
                    {keys.key}
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
