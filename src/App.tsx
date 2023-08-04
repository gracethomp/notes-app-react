import React from 'react';
import ActionGroup from './components/buttons/ActionsGroup';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ActionGroup/>
    </Provider>
  );
}

export default App;
