export class LoginPage {
  static visit() {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  }

  static clickMakeAppointment() {
    cy.contains('Make Appointment').click();
  }

  static enterUsername(username) {
    cy.get('#txt-username').type(username);
  }

  static enterPassword(password) {
    cy.get('#txt-password').type(password);
  }

  static clickLogin() {
    cy.get('#btn-login').click();
  }
}