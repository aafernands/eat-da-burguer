var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
	selectAll: () => {
		var queryString = "SELECT * FROM burgers";
		var query = connection.query(queryString, function (err, result) {
			if (err) throw err;
			console.log(result);
		});
		console.log(query.sql);
		return query;
	},
	insertOne: () => {},
	updateOne: () => {},
	deleteOne: () => {},
};

module.exports = orm;
