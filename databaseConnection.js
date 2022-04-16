const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "i0rgccmrx3at3wv3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "yxt81gjock0onu8x",
	password: "jq2kmun4jiq2if41",
	database: "qmzg3lqewrbnsuc3",
	multipleStatements: false,
	namedPlaceholders: true 
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "R751956r",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true 
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		