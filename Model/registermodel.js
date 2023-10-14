const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema(
    {
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    phone: {
        type:Number,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        unique: true
    }
},
{timestamps:true}
)

const registermodel = mongoose.model("Register",registerSchema)

module.exports = registermodel