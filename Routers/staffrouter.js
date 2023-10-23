const express = require("express");
const router = express.Router();

const staffController=require("../Controller/staffcontroller");
const registerController=require("../Controller/registerlogin");
const {registervalid,loginvalid}=require("../validation/uservalidation");

router.post("/staff_detail",staffController.staffsss);
router.put("/updatestaffs",staffController.update_staff);
router.get("/getstaff",staffController.get_staff);
router.delete("/deletestaffdetails",staffController.delete_staff);
router.post("/register",registervalid,registerController.registeruse);
router.post("loginuser",loginvalid,registerController.login);



module.exports=router;