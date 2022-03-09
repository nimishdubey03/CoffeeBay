import React from 'react';
import AppNavigation from './AppNavigation';

import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <AppNavigation />
    </>
  );
};

export default App;
