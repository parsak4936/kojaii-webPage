import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.Fragment>
<CookiesProvider>
    <App />
</CookiesProvider>


  </React.Fragment>,
  document.getElementById('root')
);
