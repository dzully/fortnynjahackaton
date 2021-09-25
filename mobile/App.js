import React from 'react';
import Main from './src/Main';
import {StoreProvider} from './store';

const App = () => {
  return (
    <StoreProvider>
      <Main />
    </StoreProvider>
  );
};

export default App;
