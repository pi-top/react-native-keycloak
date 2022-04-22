import InAppBrowser from 'react-native-inappbrowser-reborn';
import type { Browser } from 'src/keycloak/types';

const inAppBbrowserAdapter: Browser = {
  isAvailable: InAppBrowser.isAvailable,
  async openAuthSession(url, redirectUri) {
    return await InAppBrowser.openAuth(
      url,
      redirectUri
      /*, inAppBrowserOptions */
    );
  },
  async open(url) {
    return await InAppBrowser.open(url /*, inAppBrowserOptions */);
  },
};

export default inAppBbrowserAdapter;
