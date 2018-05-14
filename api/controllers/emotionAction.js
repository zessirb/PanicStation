'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});


exports.add_emotion = function(req, res) {
    connection.connect(function (error) {
        if (error) {
            res.json("{'error': 'Cannot connect to mysql server.'}");
            return;
        }
        res.json("{'action': 'test'}");
    });
};

exports.get_emotion = function(req, res) {
    connection.connect(function (error) {
        if (error) {
            res.json("{'error': 'Cannot connect to mysql server.'}");
            return;
        }
        res.json("{'action': 'test'}");
    });
};
