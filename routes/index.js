var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', source:'./images/prototypo.png' , project:'First project' , projectDescript :" Description factice du premier projet "});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ContactMe' });
});


module.exports = router;
