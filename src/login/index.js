import * as actions from './actions';
import React, { useState } from 'react';
import { Checkbox, Button, Form, Input } from 'antd';
import { CloseCircleOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons'
import { connect } from 'react-redux';
import { actions as loginActions } from './index';
import logo from '../assets/images/logo.png';
import styles from './login.module.css';
import { useTranslation } from 'react-i18next';
import SelectLang from '../components/SelectLang';
const FormItem = Form.Item;

const LoginPage = ({ login }) => {
  const { t } = useTranslation();

  let userNameInput = null;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const emitEmptyUserName = () => {
    userNameInput.focus();
    setUserName('');
    setPassword('');
  };

  const gotoLogin = (e) => {
    login({ userName, password });
  };

  const userNameSuffix = userName ? <span onClick={emitEmptyUserName} >{<CloseCircleOutlined />}</span> : null;

  const onFinish = (values) => {
    gotoLogin()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles['header-wrapper']}>
          <header>
            <a href="/">
              <img src={logo} alt="ant design mini" />
              <h2>AIoE</h2>
            </a>
            <div className={styles['nav-wrapper']}>
              <SelectLang />
            </div>
          </header>
        </div>
      </div>
      <div className={styles.content}>
        <Form         
          className={styles['login-form']}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h3>{t('welcome')}</h3>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: t('login.pleaseusername'),
              },
            ]}
          >
            <Input
              placeholder={t('login.account')}
              prefix={<UserOutlined />}
              suffix={userNameSuffix}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              ref={node => userNameInput = node}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('login.pleasepassword'),
              },
            ]}
          >
            <Input
              type="password"
              placeholder={t('login.password')}
              prefix={<EyeOutlined />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
              <div>{t('login.login')}</div>
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <div className={styles.content}>
        <Form onSubmit={gotoLogin} className={styles['login-form']}>
          <h3>{t('welcome')}</h3>
          <FormItem>
            <Input
              placeholder={t('login.account')}
              prefix={<UserOutlined />}
              suffix={userNameSuffix}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              ref={node => userNameInput = node}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Input
              type="password"
              placeholder={t('login.password')}
              prefix={<EyeOutlined />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles['login-form-button']} onClick={gotoLogin}>
              <div>{t('login.login')}</div>
            </Button>
          </FormItem>
        </Form>
      </div>
      <div className={styles['footer']}>
        {t('copyright')}
      </div> */}
    </>
  );
};

const mapDispachToProps = (dispatch, props) => ({
  login: (formValue) => {
    dispatch(loginActions.login(formValue, props.history));
  }
});

export default connect(null, mapDispachToProps)(LoginPage);

export {actions};