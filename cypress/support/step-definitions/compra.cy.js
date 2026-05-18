import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import ProdutoPage from "../pages/mentshirt.page"

And('que estou logado no portal Automation Exercise', () => {
    ProdutoPage.validarLogin();
})

When('clico no botao view product da camisa masculina', () => {
    ProdutoPage.clicarViewProduct()
    ProdutoPage.capturarNomeProduto()
    ProdutoPage.capturarPrecoProduto()

})

And('adiciono uma camisa ao carrinho', () => {

    ProdutoPage.clicarCarrinho()
    ProdutoPage.validarMensagemSucesso()
})

And('clico no botao continuar', () => {
    ProdutoPage.clicarContinueShopping()
})  

And('acesso o carrinho', () => {
    ProdutoPage.acessarCarrinho()
})

Then('nome e valor do produto devem estar corretos no carrinho', () => {
    ProdutoPage.validarNomeProduto()
    ProdutoPage.validarPrecoProduto()
})