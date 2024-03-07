import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.Location.pathname);
  };
  return (
    <Auth0ProviderWithHistory>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.Location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    </Auth0ProviderWithHistory>
  );
};

export default Auth0ProviderWithHistory;
