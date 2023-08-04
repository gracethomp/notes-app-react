import { Provider } from 'react-redux';
import store from './redux/store';
import { MainPage } from './page/MainPage';
import React from 'react';

function App() {
  return (
    <Provider store={store}>
      <MainPage></MainPage>
    </Provider>
  );
}

export default App;
