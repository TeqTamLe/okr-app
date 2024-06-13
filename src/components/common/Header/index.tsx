import { Avatar, Button, Input, Space } from "antd";

import {
  BellFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Search } = Input;

interface Props {
  collapsed?: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <Space className="header">
      <div className="header-left">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 38,
            height: 38,
          }}
        />
        <Search
          placeholder="Search OKRs, People or Teams"
          style={{ width: 275 }}
        />
      </div>
      <div className="header-right">
        <Avatar className="header-right-icon" icon={<BellFilled />} size={48} />
        <Avatar
          className="header-right-icon"
          icon={<QuestionCircleOutlined color="red" />}
          size={48}
        />
        <Avatar
          className="header-right-icon"
          icon={<UserOutlined />}
          size={48}
        />
      </div>
    </Space>
  );
};
export default HeaderComponent;
