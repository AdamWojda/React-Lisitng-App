/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage should', () => {
  const selectors = {
    Section        : 'section.listing',
    ActiveFilter   : '.filters__single--active',
    PromoFilter    : '.filters__single--promo',
    SearchWrapper  : '.header__search',
    ProductContent : '.product__details',
    Modal          : '.modal',
    ModalClose     : '.modal__close',
    Page1          : '[aria-label="page 1"]',
    GoToPage1      : '[aria-label="Go to page 1"]',
    Page2          : '[aria-label="page 2"]',
    GoToPage2      : '[aria-label="Go to page 1"]',
    Search         : '[placeholder="Search by title"]',
  };

  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('display products page', () => {
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('set pagination to first page on search and categories call', () => {
    cy.get(selectors.ActiveFilter).find('[type="checkbox"]').as('checkbox').check();
    cy.get(selectors.Page1).should('have.class', 'Mui-selected');

    cy.get(selectors.GoToPage2).click();

    cy.get(selectors.PromoFilter).find('[type="checkbox"]').as('checkbox').check();
    cy.get(selectors.Page1).should('have.class', 'Mui-selected');

    cy.get(selectors.GoToPage2).click();

    cy.get(selectors.Search).type('plastic');
    cy.get(selectors.SearchWrapper).find('[type="button"]').click();
    cy.get(selectors.Page1).should('have.class', 'Mui-selected');
  });

  it('set new results after search call', () => {
    cy.get(selectors.Search).type('Plastic');
    cy.get(selectors.SearchWrapper).find('[type="button"]').click();
    cy.get(selectors.Section).should('contain.text', 'Plastic');
  });

  it('set search call after clicking enter on input', () => {
    cy.get(selectors.Search).type('Tuna');
    cy.get(selectors.SearchWrapper).find('[type="button"]').type('{enter}');
    cy.get(selectors.Section).should('contain.text', 'Tuna');
  });

  it('have working pagination', () => {
    cy.get(selectors.GoToPage2).click();
    cy.get(selectors.Page2).should('have.class', 'Mui-selected');
    cy.get(selectors.GoToPage1).click();
    cy.get(selectors.Page1).should('have.class', 'Mui-selected');
  });

  it('show and hide a modal with details', () => {
    cy.get(selectors.ProductContent).first().find('.button').click();
    cy.get(selectors.Modal).should('contain.class', 'active');
    cy.get(selectors.ModalClose).click();
    cy.get(selectors.Modal).should('have.class', 'modal');
  });

  it('show empty message after no results found', () => {
    cy.get(selectors.Search).type('231312');
    cy.get(selectors.SearchWrapper).find('[type="button"]').type('{enter}');
  });
});
