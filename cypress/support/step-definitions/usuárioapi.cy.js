import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import usuarioApi from "../pages/api/teste.api";

Given('que preenchi o script de criação de usuário', () => {
  usuarioApi.requisicaoCriarUsuario();
}) 

Then('Validar status code 201', () => {     
    usuarioApi.validarStatusCriacao();  
})

And('validar que o usuário foi criado com sucesso', () => {
    usuarioApi.validarResponse();
})

And('Validar estrutura da resposta da API', () => {
    usuarioApi.validarResponse();
})