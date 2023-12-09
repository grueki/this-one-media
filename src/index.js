import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'red',
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
