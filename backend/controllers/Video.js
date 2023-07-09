const Video=require('../models/Video');

exports.createVideo=async(req,res)=>{
    try{
        const {title,description,author,views,creator,url,length,tags,grade,subject,lang,chapter}=req.body;
        console.log(title,description,author,views,creator,url,length,tags,grade,subject,lang,chapter);
        const video=await Video.create({title,description,author,views,creator,url,length,tags,garde,subject,lang,chapter});
        res.status(200).json({
            success:true,
            message:"video created",
            video,
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
