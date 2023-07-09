const Student=require('../models/studentModel');
const Creator=require('../models/contentCreater');
const Modulator=require('../models/contentModulater');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.studentSignUp=async(req,res)=>{
    try{
        const {name,email,password,garde,language,school,favSubject}=req.body;
        console.log(name,email,password,garde,language,school,favSubject);
        const exitingStudent=await Student.findOne({email:email});
        if(exitingStudent){
            return res
            .status(400)
            .json({
                success:false,
                message:"Email already registered."
            });
        }
        let hashedPassword;
        try{
            hashedPassword= await bcrypt.hash(password,10);
        }
        catch(error){
            return res
            .status(401)
            .json({
                success:false,
                message:"Can not hash the password."
            });
        }
        const student=await Student.create({name,email,password:hashedPassword,garde,language,school,favSubject});
        res
        .status(200)
        .json({
            success:true,
            message:"sign up succesfull",
            student:student,
        });
        console.log(student);
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:"Error in siging up."
        })
    }
};


exports.studentLogIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(email,password);
        // if email not registered
        if(!email || !password){
            return res
            .status(400)
            .json({
                success:false,
                message:"fill all details"
            });
        }
        const student=await Student.findOne({email:email});
        if(!student){
            return res
            .status(400)
            .json({
                success:false,
                message:"Please register."
            });
        }
        console.log(student);
        if(await bcrypt.compare(password,student.password)){
            console.log("hi");
            const payload={
                id:student._id,
            };
            console.log(payload);
            let options={
                // expiresIn:"2h",
            }
            console.log(options);
            const signature=process.env.JWT_SECRET;
            console.log(signature);
            const token=await jwt.sign(payload,signature,options);
            console.log(token);
            student.token=token;
            options={
                expires:new Date(Date.now()+24*60*60*1000),
                httpOnly:true
            }
            console.log(options);
            return res
            .cookie("noName",token,options)
            .status(200)
            .json({
                success:true,
                message:"Loged in successfully.",
                student,
                token,
            });
        }
        else{
            return res
            .status(400)
            .json({
                success:false,
                message:"Error in hashing password."
            });
        }
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}


exports.creatorSignUp=async(req,res)=>{
    try{
        const {name,email,password,contact,gender,channel}=req.body;
        console.log(name,email,password,channel,contact,gender);
        let hashedPassword;
        try{
            hashedPassword= await bcrypt.hash(password,10);
        }
        catch(error){
            return res
            .status(401)
            .json({
                success:false,
                message:"Can not hash the password."
            });
        }
        const creator=await Creator.create({name,email,password:hashedPassword,channel,contact,gender});
        res
        .status(200)
        .json({
            success:true,
            message:"sign up succesfull",
            creator:creator,
        });
        console.log(creator);
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
};


exports.creatorLogIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(email,password);
        // if email not registered
        if(!email || !password){
            return res
            .status(400)
            .json({
                success:false,
                message:"fill all details"
            });
        }
        const creator=await Creator.findOne({email});
        if(!Creator){
            return res
            .status(400)
            .json({
                success:false,
                message:"Please register."
            });
        }
        console.log(creator);
        if(await bcrypt.compare(password,creator.password)){
            console.log("hi");
            const payload={
                id:creator._id,
            };
            console.log(payload);
            let options={
                // expiresIn:"2h",
            }
            console.log(options);
            const signature=process.env.JWT_SECRET;
            console.log(signature);
            const token=await jwt.sign(payload,signature,options);
            console.log(token);
            creator.token=token;
            options={
                expires:new Date(Date.now()+24*60*60*1000),
                httpOnly:true
            }
            console.log(options);
            return res
            .cookie("noName",token,options)
            .status(200)
            .json({
                success:true,
                message:"Loged in successfully.",
                creator,
                token,
            });
        }
        else{
            return res
            .status(400)
            .json({
                success:false,
                message:"Error in hashing password."
            });
        }
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}


exports.modulatorSignUp=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        console.log(name,email,password);
        let hashedPassword;
        try{
            hashedPassword= await bcrypt.hash(password,10);
        }
        catch(error){
            return res
            .status(401)
            .json({
                success:false,
                message:"Can not hash the password."
            });
        }
        const modulator=await Modulator.create({name,email,password:hashedPassword});
        res
        .status(200)
        .json({
            success:true,
            message:"sign up succesfull",
            modulator,
        });
        console.log(creator);
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
};


exports.modulatorLogIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(email,password);
        // if email not registered
        if(!email || !password){
            return res
            .status(400)
            .json({
                success:false,
                message:"fill all details"
            });
        }
        const modulator=await Modulator.findOne({email});
        if(!modulator){
            return res
            .status(400)
            .json({
                success:false,
                message:"Please register."
            });
        }
        console.log(modulator);
        if(await bcrypt.compare(password,modulator.password)){
            console.log("hi");
            const payload={
                id:modulator._id,
            };
            console.log(payload);
            let options={
                // expiresIn:"2h",
            }
            console.log(options);
            const signature=process.env.JWT_SECRET;
            console.log(signature);
            const token=await jwt.sign(payload,signature,options);
            console.log(token);
            modulator.token=token;
            options={
                expires:new Date(Date.now()+24*60*60*1000),
                httpOnly:true
            }
            console.log(options);
            return res
            .cookie("noName",token,options)
            .status(200)
            .json({
                success:true,
                message:"Loged in successfully.",
                modulator,
                token,
            });
        }
        else{
            return res
            .status(400)
            .json({
                success:false,
                message:"Error in hashing password."
            });
        }
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}

exports.getStudent=async(req,res)=>{
    try{
        const student=req.student;
        res
        .status(200)
        .json({
            success:true,
            message:"student fetched",
            student:student,
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

exports.getCreator=async(req,res)=>{
    try{
        const creator=req.creator;
        res
        .status(200)
        .json({
            success:true,
            message:"student fetched",
            creator:creator,
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