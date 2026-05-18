const PRECO_PRODUTO = '.product-information span span'
const PRECO_CARRINHO = '.cart_price > p'
const NOME_PRODUTO = '.product-information > h2'
const NOME_CARRINHO = 'h4 > a'
const LOGGED = ':nth-child(10) > a'
const VIEW_PRODUCT = ':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a'
const BOTAO_CARRINHO = '.btn-default.cart'
const MENSAGEM_SUCESSO = '.text-center'
const CONTINUE_SHOPPING = '.modal-footer > .btn'
const IR_CARRINHO = '.shop-menu > .nav > :nth-child(3) > a'


class ProdutoPage {

    validarLogin() {
        cy.get(LOGGED).should('be.visible')
    }

    clicarViewProduct() {
        cy.get(VIEW_PRODUCT).click()
    }

    capturarNomeProduto() {
        cy.get(NOME_PRODUTO).should('be.visible').invoke('text').should('not.be.empty').as('nomeProduto')

    }

    capturarPrecoProduto() {
        cy.get(PRECO_PRODUTO, { timeout: 10000 }).should('be.visible').then(($el) => {
            const preco = $el.text().trim()
            expect(preco).to.not.be.empty
            cy.wrap(preco).as('precoProduto')
        })

    }

    clicarCarrinho() {
        cy.get(BOTAO_CARRINHO).click()
    }

    validarMensagemSucesso() {
        cy.get(MENSAGEM_SUCESSO).should('contain', 'added to cart')
    }

    clicarContinueShopping() {
        cy.get(CONTINUE_SHOPPING).click()
    }

    acessarCarrinho() {
        cy.get(IR_CARRINHO).click()
    }

    validarNomeProduto() {
        cy.get('@nomeProduto').then((nomeSalvo) => {
            cy.get(NOME_CARRINHO).invoke('text').should((nomeCarrinho) => {
                    expect(nomeCarrinho.trim()).to.equal(nomeSalvo.trim())
                })
        })
    }

    validarPrecoProduto() {
        cy.get('@precoProduto').then((precoSalvo) => {
            cy.get(PRECO_CARRINHO).invoke('text').should((precoCarrinho) => {
                    expect(precoCarrinho.trim()).to.equal(precoSalvo.trim())
                })
        })
    }
}


export default new ProdutoPage()
