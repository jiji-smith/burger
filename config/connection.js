const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.query = util.promisity(connection.query);

module.exports = connection;