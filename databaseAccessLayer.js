const database = include('/databaseConnection');


function getAllRestaurants(callback) {
	let sqlQuery = "SELECT restaurant_id, name, description FROM restaurant_review.restaurant";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}

function addRestaurant(postData, callback) { 
	let sqlInsertSalt = "INSERT INTO  restaurant_review.restaurant (name, description) VALUES (:name, :description);"
	let params = {
		name: postData.name,
		description: postData.description
	};
	console.log(sqlInsertSalt);
	database.query(sqlInsertSalt, params, (err, results, fields) => {
		if (err) {
			console.log(err);
			callback(err, null);
		} else {
			console.log(results);
			callback(null, results);
		}
	});
}
function deleteRestaurant(restaurant_id, callback) {
	let sqlDeleteRestaurant = "DELETE FROM restaurant_review.restaurant (name, description) WHERE restaurant_id = :userID";
	let params = {
		userID: restaurant_id
	};
	console.log(sqlDeleteRestaurant);
	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}
	});
}
// function deleteRestaurant(restaurant_id, callback) {
// 	let sqlDeleteRestaurant = "DELETE FROM restaurant WHERE restaurant_id = :restaurantId";
// 	let params = {
// 		userID: restaurant_id
// 	};
// 	console.log(sqlDeleteRestaurant);
// 	database.query(sqlDeleteRestaurant, params, (err, results, fields) => {
// 		if (err) {
// 			callback(err, null);
// 		}
// 		else {
// 			console.log(results);
// 			callback(null, results);
// 		}
// 	});
// }

module.exports = { getAllRestaurants, addRestaurant, deleteRestaurant }
