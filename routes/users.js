var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/ip', function(req, res) {
  res.send('your IP is: ' + req.socket.remoteAddress);
});

module.exports = router;
