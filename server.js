var express = require('express');

var app = express();

app.use(express.static("./app"));

app.set('port', 3333);app.listen(app.get('port') || 3333, function() {

	console.log('server started at http://localhost:' + app.get('port') + '/')

});