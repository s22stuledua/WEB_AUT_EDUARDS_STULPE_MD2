export class SidebarPage {
  static openSidebar() {
    cy.get('#menu-toggle').click();
  }

  static validateSidebarActive() {
    cy.get('#sidebar-wrapper').should('have.class', 'active');
  }

  static clickHistory() {
    cy.contains('History').click();
  }

  static validateNoAppointmentsMessage() {
    cy.contains('No appointment').should('be.visible');
  }
}