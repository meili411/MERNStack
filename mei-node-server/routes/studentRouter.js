let express = require("express");

let router = express.Router({})

let studentModel = require("../datamodel/StudentDataModel");

// localhost:9000/student/api/save?name=Malav&age=23&session=MERNStack
router.get("/api/save", (req,res)=>{
    console.log(req.query);

    let studentObj = new studentModel(req.query)

    studentObj.save((err, data)=>{
        if(err){
            console.log("we got the error!!", err)
            res.send("we got the error!!")
        }else{
            console.log("Student is saved successfully!!")
            res.send(data)
        }
    })
})

// localhost:9000/student/api/find
router.get("/api/find", (req,res)=>{
    studentModel.find((err, data)=>{
        res.send(data);
    })
})

module.exports = router;