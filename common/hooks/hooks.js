
require('dotenv').config({ path: './env/.env' });
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  global.browser = await chromium.launch({ headless: false });
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function () {
  if (global.page) await global.page.close();
  if (global.context) await global.context.close();
  if (global.browser) await global.browser.close();
});