const mysql = require("mysql");
const util = require("util");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};


connection.connect();


// //Connect to the database
// connection.connect((err) => {
//     if (err) {
//         console.error(`Error connecting to DB: ${err.message}`);
//         return;
//     }
//     console.log(`Connected to DB with connection ID ${connection.threadId}`);
// });


//???//
// connection.query = util.promisity(connection.query);

module.exports = connection;