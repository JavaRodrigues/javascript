const fs = require ('fs')
const path = require ('path')
const caminho = path.join(__dirname, 'clientes.csv')

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', function(err, conteudo) {
            if (err) {
                reject(err)
            } else {
                resolve(conteudo)
            }
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.slice(0, 2))
    .then(primeirasLinhas => primeirasLinhas.join('\n'))
    .then(console.log)
    .catch(err => console.error('Ocorreu um erro:', err))