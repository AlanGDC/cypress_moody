

let moodyUrl         = 'https://www.moodys.com/';
let signInButton     = '[data-testid="sign-in"]';
let emailField       = '[data-testid="emailInput"]';
let passWordField    = '[data-testid="password"]';
let continueEmailBtn = '[data-testid="emailContinueButton"]';
let continuePassBtn  = '[data-testid="loadingButton"]';
let homeView         = '';

let validEmail       = 'validEmail@mail.com';
let validPass        = 'Pass1234';
let non_existEmail   = 'invalidEmail@mail.com';
let not_valid_pass   = 'InvalidPass1234';

describe('Using a valid user to login (email and pass OK)', () => {
  beforeEach(() => {
    cy.visit(moodyUrl)
  })
  it('Should show home view', () => {
    cy.get(signInButton)
    .click();
    cy.get(emailField)
    .type(validEmail);
    cy.get(continueEmailBtn)
    .click();
    cy.get(passWordField)
    .type(not_valid_pass);
    cy.get(continuePassBtn)
    .click();
  })
})


describe('Using an non-existent  user to login (email non-existent)', () => {
  beforeEach(() => {
    cy.visit(moodyUrl)
  })
})

describe('Using a valid email with wrong passwornd.', () => {
  beforeEach(() => {
    cy.visit(moodyUrl)
  })
})
