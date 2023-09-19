// API  接口
// https://docs.cypress.io/api/table-of-contents
describe('hoyolab spec', () => {
  // 定义getIframeBody方法
  const getIframeBody = () => {
    // 尝试获取 iframe > document > body
    // 直到 body element 不为空
    return cy.get('#hyv-account-frame', {timeout: 100000})
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
  }

  before( function() {
    // 访问页面
    cy.visit('http://devforums.hoyolab.com')
  })

  it('login', () => {
    // 获取dom
    // 登录
    getIframeBody().find('.hyv-web-login-dialog .el-input__inner[type="text"]', {timeout: 10000})
      .type("genshintest04");
    getIframeBody().find('.hyv-web-login-dialog .el-input__inner[type="password"]', {timeout: 10000})
      .type("genshintest04").should('have.value', "genshintest04");
    getIframeBody().find('.hyv-web-login-dialog .cmn-button__block', {timeout: 10000}).click();
    // 关闭弹窗
    cy.get('.mhy-dialog__body .mhy-interest-selector__header .mhy-button__button', {timeout: 10000}).click()
    // 关注
    cy.get('.mhy-follow-button', {timeout: 10000}).first().click()
  })
  // it('searchPage', () => {
  //   // 获取dom
  //   // 登录
  //   getIframeBody().find('.hyv-web-login-dialog .el-input__inner[type="text"]', {timeout: 10000})
  //     .type("xxx");
  //   getIframeBody().find('.hyv-web-login-dialog .el-input__inner[type="password"]', {timeout: 10000})
  //     .type("xxx").should('have.value', "xxx");
  //     getIframeBody().find('.hyv-web-login-dialog .cmn-button__block', {timeout: 10000}).click();
  //   // 关闭弹窗
  //   cy.get('.mhy-dialog__body .mhy-interest-selector__header .mhy-button__button', {timeout: 10000}).click()
  //   cy.get('.mhy-autocomplete__input').type('biaobiao').should('have.value', 'biaobiao')
  //   cy.get('.icon-search').click()
  // })
})