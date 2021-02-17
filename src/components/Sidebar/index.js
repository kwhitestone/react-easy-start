import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './sidebar.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo.png';
const { SubMenu } = Menu;

const Sidebar = ({ collapsed }) => {
  const [current, setCurrent] = useState('overview');

  const { t } = useTranslation();

  const data =
    [{
      "icon": <HomeOutlined />,
      "key": "overview",
      "label": "sidebar.overview",
      "url": "/home/overview"
    }, {
      "icon": <SettingOutlined />,
      "key": "setting",
      "label": "sidebar.setting",
      "children": [{
        "key": "setting.account",
        "label": "setting.account",
        "url": "/home/setting/account"
      }]
    }]

  return (
    <div className="ant-layout-sider-children">
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
          <h1>React Easy Startsy Start</h1>
        </a>
      </div>
      <Menu
        theme="dark"
        onClick={(e) => setCurrent(e.key)}
        style={{ padding: '16px 0', width: '100%' }}
        defaultOpenKeys={['overview', 'sub-res', 'sub-other']}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {
          data.map((item) => {
            if (item.children instanceof Array) {
              return (
                <SubMenu key={item.key}
                  title={<span>{item.icon}<span>{t(item.label)}</span></span>}>
                  {
                    item.children.map((subItem) => (
                      <Menu.Item key={subItem.key}>
                        <Link to={subItem.url}>{t(subItem.label)}</Link>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.url}>
                    {item.icon}<span>{t(item.label)}</span>
                  </Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    </div>
  );
};

export default Sidebar;