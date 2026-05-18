import { faker } from '@faker-js/faker'
const BOTAO_SIGNUP = 'a[href="/login"]'
const NAME = '[data-qa="signup-name"]'
const EMAIL = '[data-qa="signup-email"]'
const BOTAO_SIGNUP2 = '[data-qa="signup-button"]'

class SignupPortal {
    acessarSignup() {
        cy.get(BOTAO_SIGNUP).click()
    }

    preencherNome(nomeAleatorio) {
        const nome = nomeAleatorio || faker.person.firstName()
        cy.get(NAME).type(nome)
        cy.wrap(nome).as('nomeCadastrado')
    }

    preencherEmail(emailAleatorio) {
        const email = emailAleatorio || faker.internet.email()
        cy.get(EMAIL).type(email)
        cy.wrap(email).as('emailCadastrado')
    }

    clicarSignup() {
        cy.get(BOTAO_SIGNUP2).click()
    }

}

export default new SignupPortal()