var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: '.'});
});

app.get('/unicorn.js', function(req,res) {
	res.sendFile('unicorn.js', {root: '.'});
})

app.listen(3000, function() {
	console.log('server starterd on port 3000');
})