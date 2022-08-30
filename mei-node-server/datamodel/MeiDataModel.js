let mongoose = require("mongoose");

mongooseSchema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack11");

let MeiDocSchema = new mongooseSchema({
    name : {type : String, required : true},
    session : String,
    // address : String
},
{
    versionKey : false
})

let meiModel = mongoose.model("meiuser", MeiDocSchema);

module.exports = meiModel;
