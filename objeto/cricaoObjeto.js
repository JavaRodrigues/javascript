// Usando notação literal
const obj1 = {}

console.log(obj1)

// objet em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// função contrutora
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())


// função factory

function criarFuncinario(nome, salarioBase, _faltas ) {
    return {
        nome,
        salarioBase,
        _faltas,
        getSalario (){
            return salarioBase / 30 * (30 - _faltas)
        }
    }
}

const f1 = criarFuncinario ('João', 7980, 4)
const f2 = criarFuncinario ('Maria', 11400, 1)
const f3 = criarFuncinario ('Pedro', 9700, 2)

console.log(f1.getSalario(), f2.getSalario())
console.log(f3.getSalario())

// Object Create
const filha = Object.create(null)
filha.nome = "Ana Elisa"
console.log(filha)

// Retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)