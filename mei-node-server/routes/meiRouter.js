let express = require("express");

let router = express.Router({})

let meiModel = require("../datamodel/MeiDataModel");

// localhost:9000/mei/api/save?name=Mei&session=MERNStack and Spring
router.get("/api/save", (req,res)=>{
    console.log(req.query);

    let meiObj = new meiModel(req.query)

    meiObj.save((err, data)=>{
        if(err){
            console.log("we got the error!!", err)
            res.send("we got the error!!")
        }else{
            console.log("Info is saved successfully!!")
            res.send(data)
        }
    })
})

// localhost:9000/mei/api/find
router.get("/api/find", (req,res)=>{
    meiModel.find((err, data)=>{
        res.send(data);
    })
})

module.exports = router;