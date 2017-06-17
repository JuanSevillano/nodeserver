// Llamado a express
var express = require('express');
var path = require('path'); 
var fs = require('fs'); 
// Favicon, log-console, bodyParser and Multer (upload files)
var logger = require('morgan'); 
var bodyParser = require('body-parser');
var multer = require('multer'); 
//  Getting routers
var portafolio = require('./routes/portafolio'); 
// App a expres method with server in 
var app = express(); 

// Including requires to app 
app.use(logger('dev')); 
// Parsing body in json format 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
	extended : false
}));
// Configurar carpeta temporal donde se guardaran las imágenes (single upload)
app.use(multer({dest : './uploads/'}).single('photo'));


// ------ Put here the routers ------ // 
app.use('/portfolio',portafolio);
//app.use('/dashboard',dashRouter);


// Setting static file acces and 'index' as a home 
app.use(express.static(__dirname + '/public')); 
// Express config
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Host ip and port  
var hostname = 'localhost';
var port = 3000;
// iniciando server 
app.listen(port, hostname, function () {
    console.log(" [ Server on => http:// " + hostname + " port: " + port + ']');
});

// If there's MySql database connection code below should be use. 
/*
databse.connect(databse.MODE_PRODUCTION, function(err) {
	if (err) {
		// Si hubo errores cerrar la aplicaciónq
		console.log('Unable to connect to MySQL.');
		process.exit(1)
	} else {
		// Si no hubo errores encender el servidor y comenzar a escuchar
		// solicitudes
		var hostname = 'localhost';
		var port = 3007;

		app.listen(port, hostname, function() {
			console.log('Servidor corriendo en http://' + hostname + ':' + port
					+ '/');
		});
	}
});
*/



