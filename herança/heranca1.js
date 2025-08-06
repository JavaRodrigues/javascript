const ferrari = {
    modelo: 'F40',
    velMax: 325
}

const volvo ={
    modelo: 'XC60',
    velMax: 300
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function        MeuObjeto(){
    console;log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}