function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}
esperarPor(3000)
    .then(() => console.log('Executando promise...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))