/**
 * Created by Juan David Sevillano  on 24/04/2017.
 */

var db = require('../database.js')

exports.registrar = function(fotodir,usuario, contrasena, correo, done) {

    var values = [fotodir,usuario, contrasena, correo];

    db.get().query('INSERT INTO usuarios (fotodir,usuario, contrasena, correo) VALUES(?,?,?,?)', values, function(err, result) {
        done(err, result);
    });
}; 

exports.logear = function (usuario, contrasena,done) {
    var values = [usuario,contrasena];

    db.get().query('SELECT * FROM usuarios WHERE usuario = ? AND contrasena= ?', values, function(err, result) {
        done(err, result);
    });

};

exports.getPost = function (categoria,done) {
    var values = [usuario,contrasena];

    db.get().query('SELECT * FROM publicaciones', function(err, result) {
        done(err, result);
    });

};

exports.check = function (usuario,done) {
    db.get().query("SELECT `id` FROM `usuarios` WHERE `usuario` = ? ;", usuario, function(err, result) {
        done(err, result);
    });
};


exports.UserSeguidores = function (usuario, contrasena,done) {
    var values = [usuario,contrasena];
    db.get().query('', values, function(err, result) {
        done(null, result.insertId);
    });

};

exports.UsuarioPublicaciones = function (usuario, contrasena,done) {
    var values = [usuario,contrasena];
    db.get().query('', values, function(err, result) {
        done(null, result.insertId);
    });

};
