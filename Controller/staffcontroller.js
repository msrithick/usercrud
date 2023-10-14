const staffdetails = require("../Model/staffmodel");

const staffsss =async(req,res) =>{
    try{
        let sta_ffs =new staffdetails({
            
            Name:req.body.Name,
            EmployeeID:req.body.EmoloyeeID,
            Phone:req.body.Phone,
            EmailID:req.body.EmailID,
            Dateofbirth:req.body.Dateofbirth,
            Gender:req.body.Gender,
            Staffcontractor:req.body.Staffcontractor,
            StartDate:req.body.StartDate,
            EndDate:req.body.EndDate,
            CompanyName:req.body.CompanyName,
            Department:req.body.Department
        })
        await sta_ffs.save();
        res.json({
            message:"Successfull Created",
        })
    }catch (error){
        res.json({
            message:"Not Created",
        });
    }
}

// |============== Update Method ==============|


const update_staff = async(req, res) => {
    try{
        let staffId = req.body.staffId;

        let updatestaff = {
            Name:req.body.Name,
            EmployeeID:req.body.EmoloyeeID,
            Phone:req.body.Phone,
            EmailID:req.body.EmailID,
            Dateofbirth:req.body.Dateofbirth,
            Gender:req.body.Gender,
            Staffcontractor:req.body.Staffcontractor,
            StartDate:req.body.StartDate,
            EndDate:req.body.EndDate,
            CompanyName:req.body.CompanyName,
            Department:req.body.Department
        }
        console.log(updatestaff);
        await staffdetails.findByIdAndUpdate(staffId, {$set:updatestaff})
        res.json({
            message: "Successfull Updated",
        })
    }catch (error){
        res.json({
            message:"error",
        });
    }
};


// |============= get method ==============|

const get_staff = async(req,res)=>{
    try{
        let getstaff = await staffdetails.find();
        res.json(getstaff)
    }catch(error) {
        res.json({
            message:"error"
        })
    }
}

// |============= delete Method =============|


const delete_staff =async(req,res)=>{
    try{
        let staffdeleteId = req.body.staffId;
        await staffdetails.findByIdAndDelete(staffdeleteId);
        res.json({
            message: "Successfully Deleted",
        })
    }catch(error){
        res.json({
            message: "Staff details Not Deleted"
        })
    }
}


module.exports = {
    staffsss,
    update_staff,
    get_staff,
    delete_staff
}