var home = require('./home')
var reservacion = require('./reservacion')
var consulta = require('./consulta')



var $ = require('jquery');
var page = require ('page')

page('/', home);
page('/reservacion', reservacion);
page('/consulta',consulta);
page();

console.log("Si esta agarrando")
