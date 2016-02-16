var express = require('express');
var router = express.Router();
var Proj = require('../models/projects');
var Exp = require('../models/experiments');
var mongoose = require('mongoose');

//var projects = mongoose.model('project', Proj);

/* GET home page. */
router.get('/', function(req, res, next) {

  /*res.render('index', {
    title: 'Express',
    project: [{title: 'John', age: 20}, {title: 'Mike', age: 30},{title: 'Mike', age: 30}],
    source:[{src :'./images/prototypoNb.png'},{src :'./images/kisskissgame/kisskissgameNb.jpg'},{src :'./images/transparency/transparencyNb.png'}],
    path:[{src : 'prototypo'} ,{ src: 'kisskissgame' },{ src: 'transparencys' }],
    projectName:'First project',
    projectDescript :" Description factice du premier projet "
  }); */

  var indexRender=   Proj.find( function(err,proj){
    res.render('index',{ title: ' Welcome ', project : proj });
    console.log(proj);
  });
});

router.get('/experiment', function(req, res, next) {
//  res.render('experiment', { title: 'kisskissgame', proj: 'miaou', projectName:'First project',});
  var resExp = Exp.find(function(err, expe) {
      if(err) {
          console.log(err);
      }
      res.render('experiment', { title: 'kisskissgame', experiment: expe});
      console.log(expe);
  });

});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ContactMe' });
});
router.use('/project', function(req, res, next){
  console.log(req.url);
  var resProject = Proj.findOne({
    url: req.url
    }, function(err, proj) {
      if(err) {
          console.log(err);
      }
      if(proj){
        res.render('project', { title: 'kisskissgame', project: proj});
        console.log(proj);
      }else{
        var err = new Error('Not Found');
        err.status = 404;
        res.render('error', {
          message: err.message,
          error: {}
        });
      }
  });
});
/*
router.use('/experiment', function(req, res, next){
  console.log(req.url);
  var resProject = Exp.findOne({
    url: req.url
  }, function(err, exp) {
      if(err) {
        console.log(err);
      }
      if(exp){
        res.render('expview', { title: 'kisskissgame', experiment: exp});
        console.log(exp);
      }else{
        var err = new Error('Not Found');
        err.status = 404;
        res.render('error', {
          message: err.message,
          error: {}
        });
      }
  });
});
*/
module.exports = router;
//https://github.com/midoam2003/alaskapacific.edu/trunk/wp-content/themes/core/fonts/gotham
