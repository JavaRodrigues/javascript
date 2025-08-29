// Função que retorna um objeto

function criarProd(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProd("Notebook", 2899.50))
console.log(criarProd("Ipad", 1979.99))