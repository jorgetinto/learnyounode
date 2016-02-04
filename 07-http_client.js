require('http').get(process.argv[2], requerimiento)

function requerimiento(res){
	res.setEncoding("utf8")
	res.on("data", console.log)
	res.on("error", console.error)
}

/*
var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  request.setEncoding("utf8");
  request.on("data", function(data) {
    console.log(data);
  });
});
*/