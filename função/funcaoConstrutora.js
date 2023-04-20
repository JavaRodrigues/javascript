function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo priovado
    let velocidadeAtual = 0

    // Metodo Publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // Metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const tiguan = new Carro
tiguan.acelerar()
console.log(tiguan.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)