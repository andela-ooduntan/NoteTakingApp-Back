var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({data: 'respond with a resource'});
});
// Loads all other routes here
router.use('/api', require('./noteRoutes'));
router.use('/api', require('./tagRoutes'));

module.exports = router;
