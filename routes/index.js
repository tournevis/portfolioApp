var express = require('express');
var router = express.Router();
var project = require('../models/project.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    project: [{title: 'John', age: 20}, {title: 'Mike', age: 30}],
    source:'./images/prototypo.png',
    projectName:'First project',
    projectDescript :" Description factice du premier projet "
  });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});
router.get('/exp', function(req, res, next) {
  res.render('exp', { title: 'exp' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ContactMe' });
});


module.exports = router;
//https://github.com/midoam2003/alaskapacific.edu/trunk/wp-content/themes/core/fonts/gotham
