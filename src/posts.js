var express = require('express');
var fs = require('fs');
var app = express();

app.get('/posts', function (req, res) {
	var files = fs.readdirSync(__dirname + '/../posts');
	res.json(files);
});

app.listen(8001);
