import React from 'react';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
