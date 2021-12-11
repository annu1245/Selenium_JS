require('chromedriver');

const webdriver = require('selenium-webdriver');
By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();


async function Sports() {
    await driver.get('https://sports.ndtv.com/cricket#pfrom=gadgets-globalnav');
}

Sports();