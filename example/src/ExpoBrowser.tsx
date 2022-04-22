import * as ExpoBrowser from 'expo-web-browser';
import type { Browser } from 'src/keycloak/types';

const expoBrowserAdapter: Browser = {
  async isAvailable() {
    return true;
  },
  async openAuthSession(url, redirectUri) {
    return await ExpoBrowser.openAuthSessionAsync(
      url,
      redirectUri
      /*, expoBrowserOptions */
    );
  },
  async open(url) {
    return await ExpoBrowser.openBrowserAsync(url /*, expoBrowserOptions */);
  },
};

export default expoBrowserAdapter;
