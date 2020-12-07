var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
	selectAll: (table, cb) => {
		var queryString = "SELECT * FROM ??";
		var query = connection.query(queryString, [table], function (err, result) {
			if (err) throw err;
			console.log(result);
		});
		console.log(query.sql);
		cb(query);
	},
	insertOne: () => {},
	updateOne: () => {},
	deleteOne: () => {},
};

module.exports = orm;
