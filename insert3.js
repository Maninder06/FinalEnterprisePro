var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ driver_id:"bani145",cab_id:"suzuki45",shift_start_time:"8:00am",shift_end_time:"4:00pm",login_time:"8:00am",logout_time:"4:00pm"},
{ driver_id:"prince11",cab_id:"honda89",shift_start_time:"6:00",shift_end_time:"2:00pm",login_time:"6:00",logout_time:"2:00pm"},
{ driver_id:"sana47",cab_id:"audi66",shift_start_time:"7:00",shift_end_time:"3:00pm",login_time:"7:00",logout_time:"3:00pm"},
{ driver_id:"vikas23",cab_id:"accord64",shift_start_time:"9:00",shift_end_time:"5:00pm",login_time:"9:00",logout_time:"5:00pm"}];

mydbs.collection("c0741327_shift").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions3 are applied ");
db.close();
});
});