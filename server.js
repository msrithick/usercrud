const expresss = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const bodyparser = require("body-parser");
const {Db} = require("mongodb");
const {connected} = require("process");

const routes = require("./Routers/staffrouter");
mongoose.connect('mongodb://localhost:27017/Staffs',{useNewUrlParser:true},{useUnifiedTopology:true})


// |=========== database connection ============|
const db = mongoose.connection;
db.on("error", (err) => {
    console.log(err)
});
db.once("open", ()=>{
    console.log("staff detail is Created")
});


const app = expresss();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


const PORT=3000;
app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
});



app.use(routes);