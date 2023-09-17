// API  接口
// https://docs.cypress.io/api/table-of-contents
describe('hoyolab spec', () => {
  it('login', () => {
    // 访问页面
    cy.visit('http://devforums.hoyolab.com')
    // 获取dom
    cy.get('.mhy-autocomplete__input').type('原神').should('have.value', '原神')
    cy.get('.icon-search').click()
    cy.get('.post-module')
  })
})