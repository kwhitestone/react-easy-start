import { GlobalOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const SelectLang = props => {
    const { i18n } = useTranslation();
    
    const { className } = props;

    //const selectedLang = 'zh-CN';
  
    const changeLang = ({ key }) => i18n.changeLanguage(key);;
  
    const locales = ['zh-CN', 'en-US'];
    const languageLabels = {
      'zh-CN': '简体中文',
      'en-US': 'English',
    };
    const languageIcons = {
      'zh-CN': '🇨🇳',
      'en-US': '🇺🇸',
    };
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={changeLang}>
        {locales.map(locale => (
          <Menu.Item key={locale}>
            <span role="img" aria-label={languageLabels[locale]}>
              {languageIcons[locale]}
            </span>{' '}
            {languageLabels[locale]}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <GlobalOutlined title="语言" />
        </span>
      </HeaderDropdown>
    );
  };
  
  export default SelectLang;
  