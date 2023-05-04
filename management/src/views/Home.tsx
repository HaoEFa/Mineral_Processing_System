  import { Breadcrumb, Layout} from 'antd';
  import React, { useState } from 'react';
  import { Outlet } from 'react-router-dom';
  const { Header, Content, Footer, Sider } = Layout;
  import MainMenu from "@/components/MainMenu"
  const View: React.FC = () => {
   
    const [collapsed, setCollapsed] = useState(false);
    

    return (
      <Layout style={{ minHeight: '100vh' }}>
          {/* 左边样式栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <MainMenu></MainMenu>
          {/* 此处的1对应getItem('Option 1', '/page1', <PieChartOutlined />)的、page1,要改为pae1,作用：使得选中原始网址时显示page1页面 */}
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} /> */}
          
        </Sider>
        {/* 右边内容 */}
        <Layout className="site-layout">
            {/* 右边头部 */}
          <Header className="site-layout-background" style={{ paddingLeft: "15px" }} >
            <Breadcrumb style={{ lineHeight: "64px" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          {/* 右边中部内容 */}
          <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
           {/* 窗口部分 */}
             <Outlet></Outlet>
          </Content>
          {/* 右边底部 */}
          <Footer style={{ textAlign: 'center' ,padding: 0, lineHeight: "48px"}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default View;