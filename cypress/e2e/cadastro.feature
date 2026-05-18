#utf-8
#language: pt

Funcionalidade: Cadastro e compra de produto no portal Automation Exercise
  Cenário: Cadastro e compra de um produto no portal Automation Exercise
  Dado que acessei o portal Automation Exercise
  E clico no botao de Signup Login
  E preencho nome e endereço de e-mail no new user signup
  E clico no botão signup
  E preencho o formulario de cadastro e clico em create account
  E que estou logado no portal Automation Exercise
  Quando clico no botao view product da camisa masculina
  E adiciono uma camisa ao carrinho
  E clico no botao continuar
  E acesso o carrinho
  Então nome e valor do produto devem estar corretos no carrinho