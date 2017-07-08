var express = require('express');
var router = express.Router();
var conn = require('../db/db');
/* GET users listing. */
router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM zi`;
    conn.query(sql, (err, results) => {
            if (err) {
                return res.send({success: false, data: err.message})
            }
            return    res.send({
                success: true,
                data: results
            })
            // console.log(results)
        }
    )
});
router.post('/', function (req, res, next) {
    let sql = `SELECT * FROM zili`;
    conn.query(sql, (err, results) => {
            if (err) {
                return res.send({success: false, data: err.message})
            }
            return    res.send({
                success: true,
                data: results
            })
        }
    )
});


module.exports = router;