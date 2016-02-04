var fs = require("fs")
  , path = require("path")

module.exports = function(dir, filter, callback) {
	filter = "." + filter
	fs.readdir(dir, function (error, list) {
		if (error)
			return callback(error)
		
		callback(null, list.filter(function (entry) {
			return path.extname(entry) === filter
		}))
	})
}
