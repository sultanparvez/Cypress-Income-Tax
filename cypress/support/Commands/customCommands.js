
/**
 * Wait till the element is visible
 * @param {String} element
 */
Cypress.Commands.add('waitTillVisible', (element) => {
  cy.get(element, { timeout: 10000 })
         .should("be.visible")
})

/**
 * To handle uncaught exceptions
 */
Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    if (err.message.includes('Sys is not defined')) {
      return false
    }
  });;
