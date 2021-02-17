import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './Store.js';
import App from './App';
import i18n from './i18n';
import 'antd/dist/antd.css';
import './assets/css/common.css';

i18n.init({    
    preload:['zh-CN','en-US'],
    lng: 'zh-CN',
    react: {
      useSuspense: false
    }
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);