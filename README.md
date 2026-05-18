
# Automação Cypress - Automation Exercise

![Cypress](https://img.shields.io/badge/Cypress-Testing-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Projeto de automação de testes end-to-end (E2E) utilizando **Cypress com Cucumber (BDD)** para validação das principais funcionalidades do site [Automation Exercise](https://automationexercise.com/).

---

## Objetivo

Garantir a qualidade das principais jornadas do usuário através de testes automatizados, cobrindo:

- Cadastro de usuário (frontend e API)
- Login
- Compra de produto
- Validação de dados em tela (ex: preço no carrinho)

---

## Tecnologias utilizadas

- Cypress
- Cucumber (BDD)
- JavaScript
- Faker (@faker-js/faker) – geração de dados dinâmicos
- Page Object Model (POM)

---


##  Estrutura do projeto

```bash
cypress/
 ├── e2e/
 │   ├── cadastro.feature
 │   ├── compra.feature
 │   ├── backend/
 │   │   ├── api.feature
 │
 ├── support/
 │   ├── pages/
 │   │   ├── signup.page.js
 │   │   ├── credencial.page.js
 │   │   ├── mentshirt.page.js
 │   │   ├── API/
 │   │       ├── teste.api.js
 │
 │   ├── step_definitions/
 │   │   ├── cadastro.cy.js
 │   │   ├── compra.cy.js
 │   │   ├── usuarioapi.cy.js
 │
 │   ├── commands.js
 │   ├── e2e.js
 │
 ├── fixtures/
 │   ├── example.json
 │
 ├── screenshots/

cypress.config.js
package.json
```


## Funcionalidades automatizadas

### Cadastro de usuário
- Cadastro via interface (UI)
- Cadastro via API (`cy.request`)
- Uso de dados dinâmicos com Faker

### Login
- Login com usuário criado
- Validação de usuário autenticado

### Compra de produto
- Navegação até produto
- Adição ao carrinho
- Validação do produto no carrinho

### Validação de preço
- Captura do preço na página do produto
- Comparação com o preço exibido no carrinho
- Uso de alias (`.as()`) para armazenar valores

---

## Boas práticas aplicadas

 Page Object Model (POM)  
 BDD com Cucumber  
 Dados dinâmicos com Faker    
 Uso de Alias (`.as()`)  
 Separação de responsabilidades 

---

Estratégia de testes
O projeto foi estruturado para garantir:

Cobertura das principais jornadas do usuário
Independência entre cenários
Reutilização de código
Clareza na leitura dos testes (BDD)

Autora
Yngrid Alexandre
Quality Engineering Associate