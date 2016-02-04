var http = require('http')
  , url = require('url')
  , routes = {
  "/api/parsetime": function(time) {
    d = new Date(time.query.iso)
    return {
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }
  },
  "/api/unixtime": function(time) {
    return {unixtime: (new Date(time.query.iso)).getTime()}
  }
}

server = http.createServer(function(request, response) {
  time = url.parse(request.url, true)
  resource = routes[time.pathname]
  if (resource) {
    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(resource(time)))
  }
  else {
    response.writeHead(404)
    response.end();
  }
});
server.listen(Number(process.argv[2]))
