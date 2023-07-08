const mongoose = require("mongoose");
const contentModulatorSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    approved:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video",
        }
    ],
    rejected:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video",
        }
    ],
});

module.exports=mongoose.model("Modulator",contentModulatorSchema);