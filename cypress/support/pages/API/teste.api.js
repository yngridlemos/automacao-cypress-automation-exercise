import { fakerPT_BR as faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

const payload = {
    name: firstName + ' ' + lastName,
    email: faker.internet.email({ firstName: firstName, lastName: lastName }),
    password: faker.internet.password({ length: 10 }),
    title: "Mrs",
    birth_date: "10",
    birth_month: "05",
    birth_year: "1990",
    firstname: firstName,
    lastname: lastName,
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: "Apto 10",
    country: "Canada",
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number()
}

 
 
class usuarioApi{
 
    requisicaoCriarUsuario(){
        return cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            form: true,
            body: payload
        }).as('response')
    }
 
    validarStatusCriacao(){
        cy.get('@response').its('status').should('eq', 200)
    }
 
    validarResponse(){
   
    cy.get('@response').then((response) => {
 
    const body = typeof response.body === 'string'
      ? JSON.parse(response.body)
      : response.body;
 
      expect(body).to.have.property('responseCode', 201);
      expect(body).to.have.property('message', 'User created!');
 
 
  });
 
 
    }
 
}
 
export default new usuarioApi;