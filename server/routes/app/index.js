module.exports = function(express) {
  var router = express.Router();

  // GET home page.
  router.get('/', function(req, res, next) {
    console.log('about to send file: ' + process.env.NODE_PATH + '/public/index.html');
    res.sendFile(process.env.NODE_PATH + '/public/index.html');
  });

  return router;
};
