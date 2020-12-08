const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: process.env.DB_HOST || "localhost",
	// Your username
	user: process.env.DB_USER || "root",
	// Your password
	password: process.env.DB_PASS || "password",
	database: process.env.DB_NAME || "eat_da_burger",
});

// const connectionString = 'mysql://...'
// const connection = mysql.createConnection(process.env.JAWSDB_URL || connectionString);

connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
