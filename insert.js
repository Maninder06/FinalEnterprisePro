var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ customer_username:"jj", firstName:"john", lastname:"petrick",registration_id:"987",address:"auld croft rd"},
{ customer_username:"tj", firstName:"austin", lastname:"hesam",registration_id:"654",address:"weston rd"},
{ customer_username:"bb", firstName:"jenny", lastname:"maria",registration_id:"321",address:"lambton avenue"},
{ customer_username:"nc", firstName:"nancy", lastname:"ford",registration_id:"123",address:"colonial drive"}];

mydbs.collection("c0741327_customer").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions are applied ");
db.close();
});
});