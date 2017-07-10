var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//重定向函数封装
function redirecty(yemian,yemianx) {
router.get('/redirect', function(req, res, next) {
    res.redirect(yemian);
});
router.get(yemian,function (req,res,next){
     res.render(yemianx,{message:req.query.message});
});
}
//每个分页都需要重定向 调用
//主页 孙玉杰写的没有重定向
redirecty('/FOUNT','FOUNT');
redirecty('/MEMORY','MEMORY');
redirecty('/DRUNk','DRUNK');
redirecty('/EXPLORE','EXPLORE');
redirecty('/LISTEN','LISTEN');
redirecty('/ENJOY','ENJOY');
redirecty('/ERVICE','ERVICE');
redirecty('/QZYL','QZYL');
redirecty('/LYWS','LYWS');
redirecty('/KJGX','KJGX');
redirecty('/QJZR','QJZR');
redirecty('/xiuxian','xiuxian');
redirecty('/wenhua','wenhua');
redirecty('/renwen','renwen');


module.exports = router;
