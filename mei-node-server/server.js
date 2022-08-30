let express = require("express");
let port = process.env.PORT || 9000;

let app = express();
let defaultRouter = require("./routes/defaultRouter");

let meiApp = express();
let meiRouter = require("./routes/meiRouter");

let studentApp = express();
let studentRouter = require("./routes/studentRouter");

app.use("/", defaultRouter);
// localhost:9000/static
app.use("/static", express.static("public"))

app.use("/mei", meiApp);
meiApp.use("/", meiRouter);

app.use("/student", studentApp);
studentApp.use("/", studentRouter);

app.listen(port, ()=> console.log(`server port is ${port}`))