var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
res.render('consulta', { title: 'Dentist-Consulta' });
});
module.exports = router;
