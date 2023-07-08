const Scholarship=require('../models/scholarship');

exports.createScholarship=async(req,res)=>{
    try{
        const {title,url,grade,deadline}=req.body;
        console.log(title,url,grade,deadline);
        const scholarship=await Scholarship.create({title,url,grade,deadline});
        console.log(scholarship);
        res.status(200).json({
            success:true,
            message:"scholarship created",
            scholarship,
        })
    }catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}