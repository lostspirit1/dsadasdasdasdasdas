import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './redux/config/index';

import SignIn from './components/signPage/index';
import MenuMain from './components/dashBoard/menu/index';
import AppRoute from './routes/AppRoute';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
