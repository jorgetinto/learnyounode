
/*++++++++++solucion 2+++++++++++++++++++++++++++++*/

require('http').get(process.argv[2], function (requerimiento) {
  requerimiento.pipe(require('bl')(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})

/*
++++++++++++solucion 1+++++++++++++++++++++++++++++

require('http').get(process.argv[2], requerimiento)

function requerimiento(res){
	var result = "";
	res.setEncoding("utf8")
	res.on("data", function(data){
	result	+= data;	})

	res.on("end", function(){
		console.log(result.length)
		console.log(result)
	})
}

*/
