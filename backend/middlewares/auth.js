const Student=require('../models/studentModel');
const Creator=require('../models/contentCreater')
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.auth=async(req,res,next)=>{
    try{
        const token=await req.body.token;
        console.log(token);
        if(!token){
            return res.status(401).json({success:false,message:"Token is missing"});
        }
        try{
            const payload=await jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);
            req.payload=payload;
        }
        catch(error){
            return res.status(401).json({success:false,message:"Invalid token"});
        }
        next();
    }
    catch(error){
        return res.status(401).json({success:false,message:"Something went wrong in verifing token."});
    }
};

exports.isStudent=async(req,res,next)=>{
    try{
        const student=await Student.findById({_id:req.payload.id});
        console.log("hi");
        console.log(student);
        console.log("hi");
        if(!student){
            return res.status(401).json({
                success:false,
                message:"un-auothorized",
                data:error.message,
            })
        }
        console.log("hi");
        req.student=student;

        next();
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }  
};

exports.isCreator=async(req,res,next)=>{
    try{
        const creator=await Creator.findById({_id:req.payload.id});
        req.creator=creator;
        if(!creator){
            return res.status(401).json({
                success:false,
                message:"un-auothorized",
                data:error.message,
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }  
};

exports.isModulator=async(req,res,next)=>{
    try{
        const modulator=await Modulator.findById({_id:req.payload.id});
        req.modulator=modulator;
        if(!modulator){
            return res.status(401).json({
                success:false,
                message:"un-auothorized",
                data:error.message,
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({success:false,message:error.message});
    }  
};
