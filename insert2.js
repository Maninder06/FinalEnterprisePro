var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ payment_id:"cd1234", customer_id:"pm7896", date:"6-march-2019",Amount:"$45"},
{ payment_id:"dv4569", customer_id:"pv1456", date:"3-feb-2019",Amount:"$50"},
{ payment_id:"cs2365", customer_id:"pc7845", date:"5-july-2109",Amount:"$80"},
{ payment_id:"ca7412", customer_id:"pb1598", date:"11-august-2019",Amount:"$66"}];

mydbs.collection("c0741327_payment").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions2 are applied ");
db.close();
});
});