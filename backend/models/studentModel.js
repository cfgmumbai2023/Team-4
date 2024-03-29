const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    garde:{
        type:String,
        required:true,
        enum:["class 1","class 2","class 3","class 4","class 5","class 6","class 7","class 8","class 9","class 10","class 11","class 12",],
    },
    language:{
        type:String,
        required:true,
        enum:["telugu",'hindi','english','tamil','urdu','marati','kannada','malayalam'],
    },
    school:{
        type:String,
        required:true,
    },
    favSubject:{
        type:String,
        required:true,
    },
});
module.exports=mongoose.model("Student",studentSchema);