require('http').createServer(function (req, res) {
  res.writeHead(200, 'content-type: text/plain')
  require('fs').createReadStream(process.argv[3]).pipe(res)
}).listen(process.argv[2] | 0)

/*
var http = require('http')
var fs = require('fs')

var filename = process.argv[3]

server = http.createServer(function(request, response) {
  fs.createReadStream(filename).pipe(response)
})
server.listen(Number(process.argv[2]))
*/