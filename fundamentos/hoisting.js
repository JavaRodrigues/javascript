console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b)
let b = 2
console.log('b =', b)


var a = 2;
console.log(a);

function qualquer() {
    console.log(a);
    var a = 3;
    console.log(a);
}

qualquer();


function getValor() {

	function retornaValor() {
		return 1;
	}

	return retornaValor();

	function retornaValor() {
		return 2;
	}
}

var resultado = getValor();
console.log(resultado);

function getValor() {

	var retornaValor = function() {
		return 1;
	}

	return retornaValor();

	var retornaValor = function() {
		return 2;
	}
}

var resultado = getValor();
console.log(resultado);