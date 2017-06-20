var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function() {
  	console.log('server listening on port ' + port);
});
