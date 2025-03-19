import { LoginPage } from '../pageObjects/loginPage';
import { AppointmentPage } from '../pageObjects/appointmentPage';
import { SidebarPage } from '../pageObjects/sidebarPage';

describe('Scenario 1 - Make an Appointment', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Should be able to book an appointment and validate values', () => {
    LoginPage.clickMakeAppointment();
    LoginPage.enterUsername('John Doe');
    LoginPage.enterPassword('ThisIsNotAPassword');
    LoginPage.clickLogin();
    AppointmentPage.selectFacility('Seoul CURA Healthcare Center');
    AppointmentPage.checkHospitalReadmission();
    AppointmentPage.selectProgram('medicaid');
    AppointmentPage.setVisitDate('30');
    AppointmentPage.enterComment('CURA Healthcare Service');
    AppointmentPage.clickBookAppointment();
    AppointmentPage.validateAppointmentDetails('Seoul CURA Healthcare Center', 'Medicaid', '30', 'CURA Healthcare Service');
  });
});

describe('Scenario 2 - Appointment history empty', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Should display "No appointment" message when no appointment history exists', () => {
    LoginPage.clickMakeAppointment();
    LoginPage.enterUsername('John Doe');
    LoginPage.enterPassword('ThisIsNotAPassword');
    LoginPage.clickLogin();
    SidebarPage.openSidebar();
    SidebarPage.validateSidebarActive();
    SidebarPage.clickHistory();
    SidebarPage.validateNoAppointmentsMessage();
  });
});