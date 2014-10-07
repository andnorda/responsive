var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, 'dist'))); //  "public" off of current is root

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port ' + port);
