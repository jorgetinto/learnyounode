/*Mejorado*/
var fs = require('fs')
  , path = require('path')

fs.readdir(process.argv[2], function(err, archivos){
	archivos
		.filter(function(archivo){ return path.extname(archivo) === '.' + process.argv[3]; })
		.forEach(function(archivo){ console.log(archivo); })		
})

/*
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, archivos){
	archivos.forEach(function(archivo){
		if (path.extname(archivo) === '.' + process.argv[3]) {
			console.log(archivo);
		}
	});
});
*/