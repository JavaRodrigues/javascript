let p = new Promise(function(resolve, reject) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

//p.then(primeiroElemento).then(letraMinuscula).then(console.log)

const primeiroElemento = string => string[0]
const letraMaiuscula = string => string.toUpperCase(0)

p.then(primeiroElemento)
    .then(letraMaiuscula)
    .then(console.log)

function log(texto) {
    console.log(texto)
}

p.then(valor => console.log(valor))

