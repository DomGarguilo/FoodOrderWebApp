var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({
        host: "triton.towson.edu",
        user: "mchen16",
        password: "Cosc*d9jq",
        port: "3360"
    });
    
    connection.connect(function (err) {
        if (err) throw err;
        connection.query("SELECT * FROM mchen16db.Login ", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    
    });

});

module.exports = router;