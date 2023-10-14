const express = require("express");
const router = express.Router();

const staffController=require("../Controller/staffcontroller");
const registerController=require("../Controller/registerlogin");

router.post("/staff_detail",staffController.staffsss);
router.put("/updatestaffs",staffController.update_staff);
router.get("/getstaff",staffController.get_staff);
router.delete("/deletestaffdetails",staffController.delete_staff);
router.post("/register",registerController.registeruse);


module.exports=router;