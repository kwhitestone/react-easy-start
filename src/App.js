import React from 'react';
import { Route } from 'react-router-dom';
import Loading from './components/Loading';
import Login from './login';
import Home from './pages';

const App = () => {
  return (
    <>
      <Loading />
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </>
  );
};

export default App;