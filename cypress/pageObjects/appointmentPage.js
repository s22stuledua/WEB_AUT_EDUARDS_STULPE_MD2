export class AppointmentPage {
  static selectFacility(facilityName) {
    cy.get('#combo_facility').select(facilityName);
  }

  static checkHospitalReadmission() {
    cy.get('#chk_hospotal_readmission').check();
  }

  static selectProgram(programName) {
    cy.get(`#radio_program_${programName}`).check();
  }

  static setVisitDate(date) {
    cy.get('#txt_visit_date').click();
    cy.contains('.datepicker-days', date).click();
  }

  static enterComment(comment) {
    cy.get('#txt_comment').type(comment);
  }

  static clickBookAppointment() {
    cy.get('#btn-book-appointment').click();
  }

  static validateAppointmentDetails(facility, program, date, comment) {
    cy.contains(facility).should('exist');
    cy.contains(program).should('exist');
    cy.contains(comment).should('exist');
    cy.contains(date).should('exist');
  }
}