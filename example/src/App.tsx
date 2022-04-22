import * as React from 'react';
import { RNKeycloak, ReactNativeKeycloakProvider } from '../../src';
import Login from './Login';
import browserAdapter from './InAppBroser';
/**
 * Or
 * import browserAdapter from './ExpoBrowser';
 */

const keycloak = new RNKeycloak({
  url: 'http://keycloak-server/auth',
  realm: 'kc-realm',
  clientId: 'web',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'myapp://Homepage', browserAdapter }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
