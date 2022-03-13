 const mongoose = require("mongoose");
//mongoose.connect(database,options,callback)
mongoose.connect("mongodb://localhost:27017/company",  (err)=>{
    var localhost= "mongodb://localhost:27017";
    if(!err) console.log("mongodb connection successfully at "+localhost);
    else console.log("Error in connection"+err);
});


