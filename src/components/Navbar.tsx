import {
  HomeOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="users">
        <Link to="/create-user">
          <Button type="primary" icon={<PlusOutlined />}>
            Create User
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item key="teams">
        <Link to="/create-team">
          <Button type="primary" icon={<PlusOutlined />}>
            Create Team
          </Button>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Align items in the center vertically
        padding: "16px",
        borderBottom: "1px solid #f0f0f0",
        backgroundColor: "#001529",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        >
          <HomeOutlined />
          <span style={{ marginLeft: "8px" }}>Home</span>
        </Link>
        <Link
          to="/users"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        >
          <UserOutlined />
          <span style={{ marginLeft: "8px" }}>Users</span>
        </Link>
        <Link to="/teams" style={{ color: "white", textDecoration: "none" }}>
          <TeamOutlined />
          <span style={{ marginLeft: "8px" }}>Teams</span>
        </Link>
      </div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button type="link">
          <Avatar size="small" icon={<UserOutlined />} />
        </Button>
      </Dropdown>
    </div>
  );
};

export default Navbar;
