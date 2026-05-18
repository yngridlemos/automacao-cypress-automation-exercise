import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import SignupPortal from "../pages/signup.page";
import PreencherCredencial from "../pages/credencial.page";

Given('que acessei o portal Automation Exercise', () => {
  cy.visit('/');
})

And('clico no botao de Signup Login', () => {
  SignupPortal.acessarSignup()
})

And('preencho nome e endereço de e-mail no new user signup', () => {
  SignupPortal.preencherNome();
  SignupPortal.preencherEmail();
})

And('clico no botão signup', () => {
  SignupPortal.clicarSignup();
});

And('preencho o formulario de cadastro e clico em create account', () => {
  PreencherCredencial.preencherGenero();
  PreencherCredencial.preencherSenha();
  PreencherCredencial.preencherDia();
  PreencherCredencial.preencherMes();
  PreencherCredencial.preencherAno();
  PreencherCredencial.clicarNewsletter();
  PreencherCredencial.clicarOffers();
  PreencherCredencial.preencherCompany();
  PreencherCredencial.preencherFirstName();
  PreencherCredencial.preencherLastName();
  PreencherCredencial.preencherAddress();
  PreencherCredencial.preencherAddress2();
  PreencherCredencial.preencherCountry();
  PreencherCredencial.preencherState();
  PreencherCredencial.preencherCity();
  PreencherCredencial.preencherZipCode();
  PreencherCredencial.preencherMobileNumber();
  PreencherCredencial.clicarCreateAccount();
  
  PreencherCredencial.validarAccountCreated();
  PreencherCredencial.clicarContinue();
})
