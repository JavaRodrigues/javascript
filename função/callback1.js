const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Aston Martin', 'Cadilac', 'Rolls Royce']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))