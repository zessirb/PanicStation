'use strict';

var mysql = require('mysql');


function get_mysql_connection() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "toor",
        database: "PanicStation"
    });
}


exports.get_emotion = function(req, res) {
    var connection = get_mysql_connection();
    connection.connect(function (error) {
        if (error) {
            res.json("{'error': 'Cannot connect to mysql server.'}");
            return;
        }
        var sql = "SELECT * FROM emotion;";
        connection.query(sql, function(error, result) {
            if (error) {
                res.json("{'error': 'Cannot request mysql server.'}");
                return;
            }
            res.json(result);
        });
    });
};

exports.add_emotion = function(req, res) {
    var terminal = req.body.terminal;
    var anger = req.body.anger;
    var disgust = req.body.anger;
    var fear = req.body.fear;
    var sadness = req.body.sadness;
    var surprise = req.body.surprise;

    var connection = get_mysql_connection();
    connection.connect(function (error) {
        if (error) {
            res.json("{'error': 'Cannot connect to mysql server.'}");
            return;
        }
        var sql = "INSERT INTO emotion (terminal, anger, disgust, fear, sadness, surprise) " +
            "VALUES ?;";
        var sql_values = [ [terminal, anger, disgust, fear, sadness, surprise] ];
        connection.query(sql, [sql_values], function(error, result) {
            if (error) {
                res.json("{'error': 'Cannot request mysql server.'}");
                return;
            }
            res.json("{'success': 'The data was saved into database.'}");
        });
    });
};


exports.clear_emotions = function(req, res) {
    var connection = get_mysql_connection();
    connection.connect(function (error) {
        if (error) {
            return;
        }
        var sql = "DELETE FROM emotion WHERE time < (NOW() - INTERVAL 10 MINUTE);";
        connection.query(sql, function(error, result) {
        });
    });
};
