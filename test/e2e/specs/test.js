// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Navigate to dino details on click'(browser) {
    browser
      .url('http://localhost:8080/#/')
      .waitForElementVisible('#list-of-dinos', 2000)
      .waitForElementVisible(".dino-wrapper:nth-child(1)", 2000)
      .click(".dino-wrapper:nth-child(1) > a")
      .waitForElementVisible("#dino-details", 2000)
      .assert.urlContains('dino/')
      .end();
  },
}
