import React from 'react';
import { Dropdown, Menu } from 'antd';
import { PoweroffOutlined, SettingFilled, MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import * as LocalStorage from '../../util/localstorage';
import styles from './header.module.css';
import SelectLang from '../SelectLang';
import { useTranslation } from 'react-i18next';

const Header = ({ collapsed, setCollapsed }) => {
  const { t } = useTranslation();

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/home/setting">
          <SettingFilled />&nbsp;{t('account.setting')}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <Link to="/login">
          <PoweroffOutlined />&nbsp;{t('login.logout')}
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles['header-wrapper']}>
      <span className={styles['header-collapsed']} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
      <div className={styles['header-user-info']}>
        <SelectLang />
        <Dropdown overlay={menu} placement="bottomRight">
          <span className={styles['header-dropdown-link']}>
          <UserOutlined /> {LocalStorage.get('TA-username')} <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;