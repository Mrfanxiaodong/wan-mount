var express = require('express');
var router = express.Router();

var mysql = require('mysql');
//获取链接
var conn = mysql.createConnection({
    host:'localhost',//服务器
    user:'root',//用户名
    password:'',
    database:'wan-mount'//数据库
});
conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log('链接成功！');
//对数据库进行初始化
}
})
module.exports = conn;