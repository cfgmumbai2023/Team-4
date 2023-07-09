const mongoose=require('mongoose');
const ratingSchema=new mongoose.Schema({
    rate:{
        type:Number,
        enum:[1,2,3,4,5],
    },
    comment:{
        type:String,
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video",
        required:true,
    },
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true,
    }
});
module.exports=mongoose.model("Rating",ratingSchema);