var mySql = require('mysql');
var server  = require('http');
var url = require('url');
var fs = require('fs');
var ob = {};
var connection = mySql.createConnection( {
    host: "pc1570",
    user: "koyi.raghavarao",
    password: "demo",
    database: "koyi.raghavarao"
});

connection.connect(function(err) {
    if (err) throw err ;
    console.log("connected...");
});

function crateTable() {
    var sql = "CREATE TABLE person (id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(10), age int);";
    connection.query(sql, function(err, result){
        if(err) throw err
        console.log("Table Person created");
    });
}

function readAll(id) {
    var sql = "SELECT * FROM person";
    connection.query(sql, function(err, result) {
        if(err) throw err;
        ob = result;
    });
}

server.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    var str = req.url;
    var qry = url.parse(str, true);
    
    if (qry.pathname === '/readAll') {
        readAll()
        res.write(JSON.stringify(ob));
    }
    res.write(JSON.stringify(ob));
    res.end();

}).listen(8080);

