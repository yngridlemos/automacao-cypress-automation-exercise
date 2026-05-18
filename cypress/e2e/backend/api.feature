# utf-8
#language: pt

Funcionalidade: Criar usuário
  Cenário: Criar usuário
  Dado que preenchi o script de criação de usuário
  Então Validar status code 201
  E validar que o usuário foi criado com sucesso
  E Validar estrutura da resposta da API