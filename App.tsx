import { registerRootComponent } from 'expo';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

registerRootComponent(App);

export default App;
