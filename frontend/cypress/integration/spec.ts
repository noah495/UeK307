const baseUrl = 'http://css-appli20.com' //base-url




function fillOutForm(firstName: string, lastname: string, email: string, bodyState: boolean | string[]) {
  cy.intercept('POST', baseUrl + ':3000/tickets/insert', {body: bodyState})
  cy.get('#firstname').click().type(firstName)
  cy.get('#lastname').click().type(lastname)
  cy.get('#email').click().type(email)
  expect(cy.url().should('eq', baseUrl + '/create'))
}

function createMockTicket() {
  cy.intercept('GET', baseUrl + ':3000/tickets/*', {fixture:'mockTicket.json'}).as('ticket')

  cy.intercept('GET', baseUrl + ':3000/concerts/*', {body: {id: 1, artist: 'Kanye West'}}).as('concert')

}

describe('BetterTiq Tests ', () => {
  before(() => {
  })

  it('When base-url is called then automatically go to overview', () => {
    cy.visit(baseUrl, {timeout: 10000})
    expect(cy.url().should('eq', baseUrl + '/overview'))
  })

  it('When plus-Button is clicked then create page should open', () => {
    cy.visit(baseUrl, {timeout: 10000})
    cy.get('.addButton').click()
    expect(cy.url().should('eq', baseUrl + '/create'))
  })

  it('When no input then show error-box', () => {
    cy.visit(baseUrl + '/create', {timeout: 10000})
    fillOutForm('firstNameTest', 'lastNameTest', 'wrongemail.com', ['error'])
    cy.get('.save-button').click()
  })


  it('When email is invalid then show error-box', () => {
    cy.visit(baseUrl + '/create', {timeout: 10000})
    fillOutForm('firstNameTest', 'lastNameTest', 'wrongemail.com', ['error'])
    cy.get('.save-button').click({force: true})
    cy.get('.error-snackbar').should('be.visible')
  })

  it('When form is filled out correctly then there should be no error snackbar', () => {
    cy.visit(baseUrl + '/create', {timeout: 10000})
    fillOutForm('firstnameTest', 'lastNameTest', 'correct@email.com', true);
    cy.get('.save-button', {timeout: 2000}).click({force: true})
    cy.get('.error-snackbar').should('not.exist')
  })

  it('When no tickets existing then show no ticket existing', () => {
    cy.intercept('GET', baseUrl + ':3000/tickets/all', {body: {}})
    cy.visit(baseUrl)
    cy.get('.no-tickets-wrapper').should('be.visible')
  })

  it('When ticket existis then show ticket', () => {
    createMockTicket();
    cy.visit(baseUrl)
    cy.get('.mat-card').should('have.length', 1)
  })

  it('When ticket-edit-button is pressed then show input boxes', () => {
    createMockTicket()
    cy.visit(baseUrl)
    cy.get('mat-card').get('.content__edit-button').click()
    cy.get('.mat-select').first().click()
    cy.get('.edit-input').should('exist')
  })

  it('When ticket changes are discarded then dont apply changes', () => {
    createMockTicket()
    cy.visit(baseUrl)
    cy.get('mat-card').get('.content__edit-button').click()
    cy.get('.mat-select').first().click()
    cy.get('.edit-input').first().type('editedOption')
    cy.get('.buttons__discard').click()
  })
// changes won't be applied since the ticket data is mocked inside fixtures/mockTicket.json
  it('When input entered in input box then it should edit ticket and clicks save', () => {
    createMockTicket()
    cy.visit(baseUrl)
    cy.get('mat-card').get('.content__edit-button').click()
    cy.get('.mat-select').first().click()
    cy.get('.edit-input').first().type('editedOption')
    cy.get('.buttons__save').click()
  })
})


