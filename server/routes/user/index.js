module.exports = function(router) {
  router.get('/', validateUser, function (req, res) {
    try {
      
    } catch (error) {
      // utility.apiResponse(res, 500, 'Server error')
    }
  })
}