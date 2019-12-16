var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) throw err;
	var mydbs = db.db("Haste_Pickup_Service");
	
	mydbs.createCollection("c0741327_shift", function(err,response){
	if (err) throw err;
	console.log("c0741327_shift Collection is Created!");
	db.close();	
	});
});