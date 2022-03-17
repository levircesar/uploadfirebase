import { Layout, Menu, Breadcrumb, Button, Upload, Select, Switch } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { NextPage } from "next";
import { useState } from "react";
import Main from "../components/Main";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Home: NextPage = () => {
  const [colapsed, setColapsed] = useState(true);

  function handleColapsed() {
    setColapsed(!colapsed);
  }


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={colapsed} onCollapse={handleColapsed} >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="2">Tom</Menu.Item>
            <Menu.Item key="3">Bill</Menu.Item>
            <Menu.Item key="4">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="5">Team 1</Menu.Item>
            <Menu.Item key="6">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="7" icon={<FileOutlined  />}>
            Files
          </Menu.Item>
          <Menu.Item key="8" icon={<DesktopOutlined  />}>
            <Link href="/teste">
              Go to Home
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Main/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2022 Created by ModernizaWeb
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
