/// <reference types="cypress" />

describe('Testing App - Pokemon', () => {
  it('Navigate on app', () => {
    //access the app
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('button').click();

    // click on person
    cy.wait(2000);
    cy.get('[data-testid=person]').click();

    // Capture Modal
    cy.wait(6000);
    cy.get('[data-testid=button-capture]').click();

    // Click on sidebar and should not open Status Modal
    cy.wait(5000);
    cy.get('[data-testid=pokemon-image]').should('exist');
    cy.get('[data-testid=sidebar-item]').first().click();
    cy.get('[data-testid=status-modal]').should('not.exist');

    // Click on sidebar and should open Status Modal
    cy.wait(5000);
    cy.get('[data-testid=sidebar-item]').last().click();
    cy.get('[data-testid=status-modal]').should('exist');

    // Click to drop pokemon
    cy.wait(5000);
    cy.get('button').contains('LIBERAR POKEMON').click();
    cy.get('[data-testid=pokemon-image]').should('not.exist');

    // Create pokemon
    cy.get('button').last().click();
    cy.get('input[type=file]').selectFile(
      { contents: './cypress/assets/avatar.png' },
      { force: true },
    );
    cy.get('input[placeholder=Nome]').type('Pokemon');
    cy.get('input[placeholder=HP]').type('50');
    cy.get('input[placeholder=Peso]').type('60');
    cy.get('input[placeholder=Altura]').type('100');

    cy.get('[data-testid=multi-select]').click();
    cy.get('[data-testid=option]').first().click();
    cy.get('[data-testid=option]').last().click();
    cy.get('body').click(0, 0);

    cy.get('input[name=abilityOne]').type('Fogo');
    cy.get('input[name=abilityTwo]').type('Água');
    cy.get('input[name=abilityThree]').type('Voar');
    cy.get('input[name=abilityFour]').type('Nadar');

    cy.get('input[name="stats.defense"]').type('20');
    cy.get('input[name="stats.attack"]').type('50');
    cy.get('input[name="stats.special-attack"]').type('100');
    cy.get('input[name="stats.special-defense"]').type('120');
    cy.get('input[name="stats.speed"]').type('80');

    cy.get('button').contains('CRIAR POKEMON').click();
  });

  it('Not open Create Modal', () => {
    //access the app
    cy.visit('http://localhost:3000');
    cy.wait(2000);
    cy.get('button').click();

    // Not open create modal
    cy.wait(2000);
    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('[data-testid=person]').click();
    cy.get('[data-testid=button-capture]').click();

    cy.get('button').last().click();
    cy.get('[data-testid=modal-create]').should('not.exist');
  });
});
