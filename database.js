/**
 * http://usejsdoc.org/
 */
var mysql = require('mysql');
//var async = require('async');


var state = {
  pool: null,
  mode: null
};

exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: '200.3.193.22',
    user: 'P09652_1_15',
    password: 'UFyAXpEn',
    database: "P09652_1_15"
  });

  state.mode = mode;
  done();
};

exports.get = function() {
  return state.pool;
};