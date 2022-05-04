const mysql2 = require("mysql2");


//databse connection
const connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "simple"
});

//check the connection
connection.connect((err) => {
    if(!err){
        console.log("Database Connected");
    }
    else{
        console.log(err);
    }
    });

module.exports = connection;