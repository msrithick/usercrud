const mongoose = require("mongoose");
const Schema = mongoose.Schema

const staffSchema = new Schema({
    Name:{
        type:String,
        require:true
    },
   EmployeeID :{
        type:String,
        require:true,
        unique:true
    },
    Phone:{
        type:String,
        require:true,
        unique:true
    },
    EmailID:{
        type:String,
        require:true,
        unique:true
    },
    Dateofbirth:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Staffcontractor:{
        type:String,
        require:true
    },
    StartDate:{
        type:Date,
        require:true
    },
    EndDate:{
        type:String,
        require:true
    },
    CompanyName:{
        type:String,
        require:true
    },
    Department:{
        type:String,
        require:true
    }
}

)

const staff = mongoose.model("Add Staff Details",staffSchema);

module.exports=staff