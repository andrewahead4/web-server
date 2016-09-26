var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		var curDate = new Date().toString();
		console.log('Request: ' + curDate + ' ' +  req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.requireAuthentication);

app.use(middleware.logger);

// app.get('/', function (req, res){
// 	res.send('Hello Express!');
// });

app.get('/about', function (req, res){
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));

//console.log(__dirname);

app.listen(3000);