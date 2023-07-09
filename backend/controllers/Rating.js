const Rating=require('../models/ratingModel');
const Video=require('../models/Video');
const Student=require('../models/studentModel');

exports.createRating=async(req,res)=>{
    try{
        console.log("jh");
        const {rate,comment,video}=req.body;
        console.log(rate,comment,video);
        const student=req.student;
        console.log(student);
        const findVideo=await Video.findById({_id:video});
        console.log(findVideo);
        const rating=await Rating.create({rate,comment,video:findVideo._id,student:student._id});
        console.log(rating);
        const updateVideo=await Video.findByIdAndUpdate(
            {_id:findVideo._id},
            {
                $push:
                {
                    rating:rating._id,
                }
            },
            {new:true}
        );
        console.log(updateVideo);
        const updateStudent=await Student.findByIdAndUpdate(
            {_id:student._id},
            {
                $push:
                {
                    rating:rating._id,
                }
            },
            {new:true}
        );
        console.log(updateStudent);
        res.status(200).json({
            success:true,
            message:"rating created",
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