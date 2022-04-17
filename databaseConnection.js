const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "x8autxobia7sgh74.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "vvmvssvsbo7h0vly",
	password: "zmr5abn0rf4zl3ma",
	database: "bimaefpnsy352d6s",
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
		