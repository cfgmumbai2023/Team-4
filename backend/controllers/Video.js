const Video = require('../models/Video');

exports.searchVideo = async (req, res) => {
    try{
        console.log("11223");
        const search = req.body.text;
        console.log("hi");
        const videos = await Video.find();
        if(!search){
            return res.status(200).json({
                videos:videos,
            })
        }
        console.log("hi");
        const filtered_videos = videos.filter(vid => vid.title.toLowerCase().includes(search));
        return res.status(200).json({
          success: true,
          payload: filtered_videos,
          data:"backend called",
        });
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

exports.createVideo=async(req,res)=>{
    try{
        const {title,description,author,views,url,length,tags,garde,subject,lang,chapter}=req.body;
        console.log(title,description,author,views,url,length,tags,garde,subject,lang,chapter);
        const creator=req.creator;
        console.log(creator);
        const video=await Video.create({title,description,author,views,creator:creator._id,url,length,tags,garde,subject,lang,chapter});
        console.log(video);
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

exports.getRecommendations=async(req,res)=>{
    try{
        const student=req.student;
        console.log(student);
        const favSubject=student.favSubject;
        console.log(favSubject);
        const recommendations=await Video.find({subject:favSubject});
        console.log(recommendations);
        res.status(200).json({
            success:true,
            message:"recommadations fetched",
            recommadations:recommendations,
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


exports.getPendingVideos=async(req,res)=>{
    try{
        const pending=await Video.find({approved:false});
        res.status(200).json({
            success:true,
            message:"pending videos fetched",
            pending:pending,
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

exports.getVideosForSub=async(req,res)=>{
    try{
        const student=req.student;
        const {subject}=req.body;
        const videos=await Video.find({subject:subject})
        res.status(200).json({
            success:true,
            message:"videos related to subjects fetched",
            videos:videos,
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
