export const environment = {
  production: true,
  version: 0,
  name: 'ENV_NAME',
  debug: false,
  locale: 'fr',
  homeRoute: '',
  slack: {
    enable: false,
    url: '',
    author_name: 'NG_APP',
  },
  mock: {
    token: 'dummy_token',
    user: {
      id: 999,
      firstName: 'Dummy',
      lastName: 'User',
    },
  },
  providers: {
    api: {
      name: 'api',
      url: 'http://localhost:3000/v1',
      timeout: 5000,
    }
  },
  auth: {
    type: 'Bearer',
    key: 'token',
  },
  stripe: {
    publishedKey: ''
  }
};

import 'zone.js/dist/zone-error';
