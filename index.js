require('chromedriver');

const webdriver = require('selenium-webdriver');
By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('chrome').build();


async function Sports() {
    await driver.get('https://sports.ndtv.com/cricket#pfrom=gadgets-globalnav');
    driver.findElements(By.xpath("*//h3[@class = 'crd_ttl']/a"))
    .then(res => {
        var links = res.map(aTag => aTag.getAttribute('href'))
        Promise.all(links)
        .then(allLinks => {
            allLinks.forEach((link) => {
                console.log(link)
            })
        })
    })
}

Sports();