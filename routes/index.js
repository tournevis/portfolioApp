var express = require('express');
var router = express.Router();
var Proj = require('../models/projects');
var mongoose = require('mongoose');

//var projects = mongoose.model('project', project);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    project: [{title: 'John', age: 20}, {title: 'Mike', age: 30},{title: 'Mike', age: 30}],
    source:[{src :'./images/prototypoNb.png'},{src :'./images/kisskissgame/kisskissgameNb.jpg'},{src :'./images/transparency/transparencyNb.png'}],
    path:[{src : 'prototypo'} ,{ src: 'kisskissgame' },{ src: 'transparencys' }],
    projectName:'First project',
    projectDescript :" Description factice du premier projet "
  });
});

router.get('/experiment', function(req, res, next) {
  res.render('experiment', { title: 'kisskissgame', proj: 'miaou', projectName:'First project',});
  /*var resProject = Proj.findOne({
    url: "kisskissgame"
    }, function(err, proj) {
      res.render('experiment', { title: 'kisskissgame', proj: resProject});
      console.log(resProject);
  }); */

});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ContactMe' });
});
router.use('/project', function(req, res, next){
  console.log(req.url);
  res.render('project',  { title: req.url, proj: req.url});
});


module.exports = router;
//https://github.com/midoam2003/alaskapacific.edu/trunk/wp-content/themes/core/fonts/gotham
