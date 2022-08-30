let express = require("express");

let router = express.Router({})

// localhost:9000/hello
router.get("/hello", (req, res)=>{
    res.send("Hello from default router");
})

// localhost:9000/animal?name=elephant&color=gray
router.get("/animal", (req, res)=>{
    let param1 = req.query.name;
    let param2 = req.query["color"];

    res.send(`<h1>Animal name is ${param1} and color is ${param2}</h1>`)
})

module.exports = router;

