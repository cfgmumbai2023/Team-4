const mongoose=require('mongoose');
const scholarshipSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    grade:{
        type:String,
    },
    deadline:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model("Scholarship",scholarshipSchema);