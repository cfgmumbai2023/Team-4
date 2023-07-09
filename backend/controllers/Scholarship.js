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

exports.getScholarship=async(req,res)=>{
    try{
        const student=req.student;
        const garde=student.garde.split(' ')[1];
        console.log(garde);
        const scholarship=await Scholarship.find({grade:garde});
        res.status(200).json({
            success:true,
            message:"scholarship fetched",
            scholarship:scholarship,
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

exports.getAllScholarship=async(req,res)=>{
    try{
        const allScholarship=await Scholarship.find({});
        res.status(200).json({
            success:true,
            message:"scholarship fetched",
            allScholarship:allScholarship,
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