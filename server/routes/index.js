var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.sendFile(global.rootDirectory + '/index.html')
})

module.exports = router