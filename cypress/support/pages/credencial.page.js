import { faker } from '@faker-js/faker'
const GENERO = '#id_gender1'
const SENHA = '[data-qa="password"]'
const DIA = '[data-qa="days"]'
const MES = '[data-qa="months"]'
const ANO = '[data-qa="years"]'
const NEWSLETTER = '[name="newsletter"]'
const OFFERS = '[name="optin"]'
const FIRST_NAME = '[data-qa="first_name"]'
const LAST_NAME = '[data-qa="last_name"]'
const COMPANY = '[data-qa="company"]'
const ADRESS = '[data-qa="address"]'
const ADRESS2 = '[data-qa="address2"]'
const COUNTRY = '#country'
const STATE = '[data-qa="state"]'
const CITY = '[data-qa="city"]'
const ZIPCODE = '[data-qa="zipcode"]'
const MOBILE_NUMBER = '[data-qa="mobile_number"]'
const CREATE_ACCOUNT = '[data-qa="create-account"]'
const ACCOUNT_CREATED = '.title.text-center'
const BOTAO_CONTINUE = '[data-qa="continue-button"]'

class PreencherCredencial {

    preencherGenero() {
        cy.get(GENERO).check()
    }

    preencherSenha(senhaAleatoria) {
        const senha = senhaAleatoria || faker.internet.password()
        cy.get(SENHA).type(senha);
        cy.wrap(senha).as('senhaCadastrada')
    }

    preencherDia() {
        cy.get(DIA).select('23')
    }

    preencherMes() {
        cy.get(MES).select('November')
    }

    preencherAno() {
        cy.get(ANO).select('1998')
    }
    
    clicarNewsletter() {
        cy.get(NEWSLETTER).check()
    }

    clicarOffers() {
        cy.get(OFFERS).check()
    }

    preencherFirstName(nomeAleatorio) {
        cy.get('@nomeCadastrado').then(nome => {
        cy.get(FIRST_NAME).type(nome)
})


    }

    preencherLastName(lastNameAleatorio) {
        const lastName = lastNameAleatorio || faker.person.lastName()
        cy.get(LAST_NAME).type(lastName)
        cy.wrap(lastName).as('lastNameCadastrado')
    }

    preencherCompany() {
        cy.get(COMPANY).type('Co')
    }

    preencherAddress() {
        cy.get(ADRESS).type('Angels Street, 123')
    }

    preencherAddress2() {
        cy.get(ADRESS2).type('Apt 4B')
    }

    preencherCountry() {
        cy.get(COUNTRY).select('New Zealand')
    }

    preencherState() {
        cy.get(STATE).type('Pernambuco')
    }

    preencherCity() {
        cy.get(CITY).type('Olinda')
    }

    preencherZipCode() {
        cy.get(ZIPCODE).type('12345')
    }

    preencherMobileNumber() {
        cy.get(MOBILE_NUMBER).type('1234567890')
    }

    clicarCreateAccount() {
        cy.get(CREATE_ACCOUNT).click();
    }

    validarAccountCreated() {
        cy.get(ACCOUNT_CREATED).should('be.visible')
    }

    clicarContinue() {
        cy.get(BOTAO_CONTINUE).click();
    }

}
export default new PreencherCredencial()