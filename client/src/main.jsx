import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store,persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react'
import { app } from './firebase.config'
import {NextUIProvider} from "@nextui-org/react";
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <StrictMode>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </StrictMode>
    </PersistGate>
 </Provider>,
)
