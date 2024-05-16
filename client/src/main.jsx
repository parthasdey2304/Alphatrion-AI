import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import 'remixicon/fonts/remixicon.css';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-axjbuwwiq25fwovq.eu.auth0.com"
    clientId="aOkaR5wwKMYif9pIikMnInkoL3zx1GRm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);