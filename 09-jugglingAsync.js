var results = []
  , count = 0

function imprimirResultados () {
  results.forEach(function (data) {
    console.log(data)
  })
}

function httpGet (index) {
  require('http').get(process.argv[2 + index], function (response) {
    response.pipe(require('bl')(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()

      if (++count > 2)
        imprimirResultados()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)


/*
var http = require('http')

var urls = process.argv.slice(2)
var results = []

// initialise results array
for (i = 0; i < urls.length; i++) {
  results[i] = null
}

for (i = 0; i < urls.length; i++) {
  (function(i) {
    http.get(urls[i], function(request) {
      var result = ""
      request.setEncoding("utf8")
      request.on("data", function(data) {
        result += data
      });
      request.on("end", function() {
        results[i] = result
        var resultCount = 0
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j])
          }
        }
      })
    })
  })
  (i)
}
*/