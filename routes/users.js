var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users');
});

router.get('/catalogue', function(req, res, next) {
  console.log(req.body)
  res.render('coinFeatures');
});
module.exports = router;
