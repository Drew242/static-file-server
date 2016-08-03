// Requires \\
var express    = require('express');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var fs         = require('fs');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var fileContents = fs.readFileSync('./app/data.txt');

// Routes \\
app.get('/', function(req, res){
  res.header('Content-Type', 'text/html');
  res.send(`<p>${fileContents}<p>`);
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
