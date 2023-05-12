import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/toastify.css";
import 'aos/dist/aos.css';
import reportWebVitals from './reportWebVitals';
import WebRoute from './route';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContextProvider from './UserContext/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <WebRoute />
        <ToastContainer
            position="top-right"
            autoClose={4000}
            theme="light"
            toastClassName="font-gilroyLight"
          />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
