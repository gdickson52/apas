var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', (req, res, next) => {
  res.send(process.env.API_SECRET);
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
