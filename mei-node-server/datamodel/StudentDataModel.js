let mongoose = require("mongoose");

mongooseSchema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack11");

let StudentDocSchema = new mongooseSchema({
    name : {type : String, required : true},
    age : String,
    session : String
},
{
    versionKey : false
})

let studentModel = mongoose.model("studentuser", StudentDocSchema);

module.exports = studentModel;
