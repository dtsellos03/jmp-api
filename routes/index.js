var express = require('express');
var router = express.Router();
const request = require("request")

router.get('/', (req, res, next) => {
  res.send("blep")
});

router.get('/getImage/:url', function(req, res, next) {
  var requestSettings = {
    url: req.params.url,
    method: 'GET',
    encoding: null
  };
  request.get(requestSettings, (err, resp, body) => {
    var type = resp.headers['content-type'];
    res.set('Content-Type', type);
    res.send(body)
  })
});

module.exports = router;
