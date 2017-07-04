var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/redirect', function(req, res, next) {
    res.redirect('/found');
});


router.get('/found',function (req,res,next){
    res.render('found',{message:req.query.message});
});

module.exports = router;
