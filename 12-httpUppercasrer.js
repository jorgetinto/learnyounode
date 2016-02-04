
require('http').createServer(function (request, response) {
  if (request.method !== 'POST')
    return response.end('favor enviar un POST!\n')

  request.pipe(require('through2-map')(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(response)
}).listen(process.argv[2] | 0)


/*
var http = require('http')
  , map = require('through2-map')

upper = map(function(chunk) {
  return chunk.toString().toUpperCase()
})

server = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(upper).pipe(response)
  }
})
server.listen(Number(process.argv[2]))
*/