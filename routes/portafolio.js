/*
	Router template for node service 
	Creted by @Juansevillano 2017 
	*/ 

	var express = require('express'); 
	var bodyParser = require('body-parser'); 
	var fs = require('fs'); 
	//var hidden = express(); 

	//var io = require('socket.io')(); 


// Setting sync controller
var userController = require('../model-controller/user-controller');

// Creating module router
module.exports = (function () {
	// router 
	var router = express.Router();
	// Parsing body data request 
	router.use(bodyParser.json());


	// creation of public variables in this section 
	var userId = undefined;

	// On get request to /portfolio 
	router.route('/').get(function(req,res){

		res.send('<h1>Hidden homepage</h1>');
		// getting sketch path 
		//var dirI = __dirname.split('routes'); 
		//var dirF = dirI[0] + 'public/index.html' ; 
		// sending a portfolio sketch 
	 	//res.sendFile(dirF, function (err) {
		//    if (err) {
		//      console.log('Te tiro el error ' + err); 
		//    } else {
		//      console.log('Sent:', dirF);
		//    }
	    //});
	});

	/* POST METHOD WITH UPLOAD IMAGE  
	    userRouter.route('/registro').post(function (req, res, next) {

        console.log(req.body);
        var username = req.body.nombre; 
        var fotodir = 'images/user/' + req.file.filename;
        var correo = 'xxxxxx';
        var password = req.body.pass;
             // Guardar el archivo en la ubicacion final
        var targetPath = './public/images/user/' + req.file.filename;
        fs.rename(req.file.path, targetPath, function (err) {
            if (err)
                throw err;


		// parametros Controller registrar(fotodir,usuario, contrasena, correo, done)
		// La funcion despues de las variables es el callback Done
            userController.registrar(fotodir, username, password, correo,
                function (err, result) {
                    if (err)
                        throw err;// Si no hay error responde con el usuario
                               
                    res.redirect('/user/dash'+username);
                    console.log("Registro el usuario satisfactoriamente!");
                    console.log(JSON.stringify(result));
                });
        });
       
    });
    */

	// return module router 
	return router; 
})(); 