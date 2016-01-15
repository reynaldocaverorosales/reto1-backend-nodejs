
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var posts=require('./modulo.js');

app.get('/posts', function (req, res) {
cantidad = _.random(5,10);
usuarios = _.times(cantidad, posts.generarUsuario);
res.json(usuarios);
});

app.get('/datos', function (req, res) {
cantidad = _.random(5,10);
usuarios = _.times(cantidad, posts.generarIp);
res.json(usuarios);
});


app.get('/', function (req, res) {
res.sendfile('pagina.html');
res.send('<h1>Escribe en la URL: <br> http://localhost:3000/posts <br> http://localhost:3000/datos</h1>');

});


app.listen(3000);

