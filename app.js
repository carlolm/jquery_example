/** Basic ExpressJS initialization **/
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Define path to public folder
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var jquery = require('jquery');

/**	Routes **/
app.get('/', function(req, res) {
	res.render('index', {
		title: 'jQuery Examples'
	});
});



/** Host on server/cloud or local port **/
var port = process.env.PORT || 1337;

// app.listen for HTTP; server.listen for HTTPS
app.listen(port, function() {
	console.log('http://127.0.0.1:' + port + '/');
});

// Get server IP address
var ip_address = require('./public/js/ip_address.js');