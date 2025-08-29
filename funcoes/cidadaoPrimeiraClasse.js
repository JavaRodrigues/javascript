// Criar de formar literal
function fun1(){}

// Armazenar em uma variavel
const fun2 = function(){}

// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazena em um atributo de objeto

const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// Passar funcção como parametrô

function run(fun){
    fun()
}

run(function () { console.log("Executando")})

// Uma função pode retonar|conter uma função

function soma (a,b) {
    return function (c){
        console.log(a + b + c )
    }
}
soma( 2, 3)(4)
const cincoMais = soma (2, 3)
cincoMais(4)
