import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import App from './App';

// 引入Provider自動為後代組件傳store.js
import store, { persistor }  from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

const Index = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efefef;
  font-family: 'Inter', sans-serif;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Index>
        <App />
      </Index>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);


