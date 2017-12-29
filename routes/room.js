/*
	Router service for Room interactions
	Creted by @Juansevillano 2017 
	*/ 

var express = require('express'); 
var bodyParser = require('body-parser'); 
var fs = require('fs'); 
//var hidden = express(); 
//var io = require('socket.io')(); 

// Setting sync controller
var roomController = require('../model-controller/room-controller');

// Creating module router
module.exports = (function () {
    // router 
    var router = express.Router();
    // Parsing body data request 
    router.use(bodyParser.json());


    // creation of public variables in this section 
    var userId = undefined;

    // On get request to /room 
    router.route('/').get(function(req,res){
        roomController.turnLight();
        res.send("Arduino conectado");
    });

    return router; 
})(); 