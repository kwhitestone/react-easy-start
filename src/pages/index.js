import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Overview from './Overview';
import AccountSetting  from './Setting/Account';
import styles from './home.module.css';

const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 80 : 256;
  const sidebarStyle = {
    flex: '0 0 ' + sidebarWidth + 'px',
    width: sidebarWidth + 'px'
  };

  return (
    <div className="ant-layout ant-layout-has-sider">
      <div style={sidebarStyle} className="ant-layout-sider ant-layout-sider-dark">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className={`${styles['content-wrapper']} ant-layout`}>
        <div className={`${styles.header} ant-layout-header`}>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        <div className={`${styles.content} ant-layout-content`}>
          <Route path="/home/overview" component={Overview} />          
          <Route path="/home/setting/account" component={AccountSetting} />          
        </div>
      </div>
    </div>
  );
};

export default HomePage;