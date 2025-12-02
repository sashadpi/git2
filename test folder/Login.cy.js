describe('Log-in', () => {
  it('Login', () => {
    cy.visit('https://stagingmy-paymint.wldev.app/sign-in')
    cy.viewport(1920, 1080)

    cy.get('input[id="input-27"]') //email
    .type('a.brusnichenko@kyrrex.com')
    .should('have.value', 'a.brusnichenko@kyrrex.com')

    cy.get('input[id="input-32"]') //password
    .type('vtcKPAxpkz3Ozizpps6d')
    .should('have.value', 'vtcKPAxpkz3Ozizpps6d')

    cy.contains('button', 'Log in').click()
    
  })
})