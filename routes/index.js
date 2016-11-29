var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.get('/playlist', function(req, res, next) {
  res.render('playlist', { title: 'playlist' });
});

router.get('/promesas', function(req, res, next) {
  res.render('promesas', { title: 'promesas' });
});

module.exports = router;
