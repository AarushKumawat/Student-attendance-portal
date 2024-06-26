import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner"
import { AuthProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
        <App /><Toaster
          position="top-right"
          richColors
          closeButton
          duration={2000}
          pauseWhenPageIsHidden
          visibleToasts={1} />
          </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
