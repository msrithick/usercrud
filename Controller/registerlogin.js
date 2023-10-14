const Register = require("../Model/registermodel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");




const registeruse = async(req, res)=>{
    try {
        bcryptjs.hash(req.body.password,10, async function(err, hashedPass){
            if(err){
                res.json({
                    error:err
                })
            }

            let register =  new Register({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                password:hashedPass
            })
            let existregister = await Register.findOne({
                $or:[{ email:req.body.email},{phone:req.body.phone}]
            })

            if(existregister){
                res.json({
                    message: "already Added"
                })
            }
            else{
                register.save()
                res.json({
                    message:"User Added"
                })
            }
        })
        
    } catch (error) {
        res.json({
            message: "an error occured"
        })
    }
}

module.exports = {
    registeruse
}