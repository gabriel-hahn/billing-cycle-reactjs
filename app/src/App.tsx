import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import GlobalStyle from './styles/global';

import Routes from './routes/Routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ReduxToastr />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
