import React from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;
const Navbar = () => {
  return (
    <div>
      <Menu mode="horizontal">
        <div>
          <span style={{ fontSize: 20, fontWeight: "bold" }}>Logo</span>
        </div>
        <Menu.Item key="Home">Home</Menu.Item>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="Contact">Contact</Menu.Item>

        <SubMenu
          title={
            <span className="submenu-title-wrapper">Navigation - Submenu</span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Navbar;
