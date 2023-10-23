const Register = require("../Model/registermodel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


// |========== login user ===========|

const login = async(req, res)=>{
    try{
        let username = req.body.username
        let password = req.body.password
        let types={}
        if(typeof username === "string"){
            types={email:username}
        }else if(typeof username === "number"){
            types={phone:userrname}
        }
        let user=await Register.findOne({types})
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }if(result){
                    let token=jwt.sign({_id:user.id},'secretvalue',{expiresIn:'1h'})
                    res.json({
                        message: "login successful",
                        token
                    })
                }else{
                    res.json({
                        message: "password doesnt match"
                    })
                }
            })
        }else{
            res.json({
                message:"user not found"
            })
        }
    }catch(error){
        res.json({
            message:"an error occured"
        })
    }
}

// |============= register section =============|
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
        
        }       catch (error) {
        res.json({
            message: "an error occured"
        })
    }
}

module.exports = {
    registeruse,
    login
} 