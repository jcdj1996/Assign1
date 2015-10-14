var express = require('express');
var router = express.Router();
/* GET ABOUT PAGE*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | James Jennings' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'James Jennings' });
});

module.exports = router;
