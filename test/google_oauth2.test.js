'use strict';

const delay = require('delay');
const {OAuth2Client} = require('google-auth-library');
const puppeteer = require('puppeteer');

const config = require('../config');

let browser;

afterAll(async () => {
  await browser.close();
});

beforeAll(async () => {
  browser = await puppeteer.launch({headless: false});
});

describe('google Oauth', () => {
  test('should login via google-auth-library and get the correct user email address from the API', async () => {
    let callbackUrl = `${config.apiRootUrl}${config.google.callbackPath}`;
    let authUrl = await generateAuthUrl(callbackUrl);
    expect(authUrl).toBeDefined();

    const page = await browser.newPage();
    await login({
      page, 
      url: authUrl
    });
    let callbackUrlWithoutCode = page.url().split('?')[0];
    expect(callbackUrlWithoutCode).toBe(callbackUrl);
    let jsonBody = await page.evaluate(() => {
      return JSON.parse(document.querySelector('body').innerText); 
    });
    expect(jsonBody.data.email).toBe(config.test.emailAddress);
  }, 60000);

});

async function generateAuthUrl (callbackUrl) {
  const oAuth2Client = new OAuth2Client(
    config.google.clientId,
    config.google.clientSecret,
    callbackUrl
  );
  return oAuth2Client.generateAuthUrl({
    scope: ['profile', 'email']
  });
}

async function login ({
  page, 
  url
}) {
  // ⚠ To be able to login through chrome headless we cannot use 
  // a gmail account which is configured to add a security step
  // such as getting a code by text message.
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });
  await page.mainFrame().waitForSelector('#identifierId');
  await page.type('#identifierId', config.test.emailAddress);
  await page.mainFrame().waitForSelector('#identifierNext');
  await page.click('#identifierNext');
  await page.mainFrame().waitForSelector('#password input[type="password"]', {
    visible: true
  });
  await page.type('#password input[type="password"]', config.test.emailPassword, {
    delay: 100
  });
  await page.click('#passwordNext');
  console.log('click before redirection', page.url());
  await delay(5000);
}

