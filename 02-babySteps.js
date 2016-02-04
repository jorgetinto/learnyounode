
/*esta es la mejor forma de hacer una iteracion*/
var numero =
	process.argv
		.slice(2)
		.reduce(function(valorPrevio, valorActual){
			return valorPrevio + Number(valorActual);
	}, 0);

console.log(numero);

/*
var numero = 0;

for (var i = 2; i < process.argv.lenght; i++){
	numero += Number(process.argv[i]);
}
console.log(numero);
*/