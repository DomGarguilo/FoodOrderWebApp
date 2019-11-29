var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host: 'us-cdbr-iron-east-05.cleardb.net',
        user: 'bf967a94ff1047',
        password: '40e7fd8d',
        database : 'heroku_01f0321449bfb48'
    });

    connection.query("SELECT * FROM test ", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    });

});

module.exports = router;