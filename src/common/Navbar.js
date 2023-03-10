import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  function stickyNavbar() {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);
  return (
    <>
      <nav>
        <Menu className={scroll ? "scroll" : "fixed"} mode="horizontal">
          <div>
            <span style={{ fontSize: 20, fontWeight: "bold" }}>Logo</span>
          </div>
          <Menu.Item key="Home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="about">
            <NavLink to="/about">About</NavLink>
          </Menu.Item>
          <Menu.Item key="Contact">
            <NavLink to="/contact">Contact</NavLink>
          </Menu.Item>
          <Menu.Item key="blogs">
            <NavLink to="/blogs">Blogs</NavLink>
          </Menu.Item>
          <Menu.Item key="dashboard">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="logIn">
            <NavLink to="/logIn">LogIn</NavLink>
          </Menu.Item>

          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                Navigation - Submenu
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">
                <NavLink to="/Users">All User</NavLink>
              </Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </nav>
    </>
  );
};

export default Navbar;
