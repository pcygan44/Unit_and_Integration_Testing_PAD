describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6');
  });


  it('should chain multiple operations together (10-2) / 2 - 6', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-2');
  });

  it('should output as expected very large decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5555');
  });

  it('should display a error if devided by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');
  });

})