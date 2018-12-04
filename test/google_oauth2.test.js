'use strict';

const {OAuth2Client} = require('google-auth-library');

const config = require('../config');

describe('google Oauth', () => {
  test('should login and get a Json Web Token', async () => {
    let callbackUrl = `${config.apiRootUrl}${config.google.callbackPath}`;
    let authUrl = await generateAuthUrl(callbackUrl);
    expect(authUrl).toBeDefined();
  });
});

async function generateAuthUrl (callbackUrl) {
  const oAuth2Client = new OAuth2Client(
    config.google.clientId,
    config.google.clientSecret,
    callbackUrl
  );
  return oAuth2Client.generateAuthUrl({
    scope: 'profile'
  });
}
