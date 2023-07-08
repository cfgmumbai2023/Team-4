const mongoose=require('mongoose');

const videoSchema=new mongoose.Schema({
    url: { 
        type: String, 
        required: true, 
    },
    title: { 
        type: String, 
        required: true, 
    },
    author: { 
        type: String, 
        required: true,  
    },
    views: { 
        type: String, 
        required: true, 
    },
    lang: { 
        type: String, 
        required: true, 
    },
    
    grade: { 
        type: String, 
        required: true, 
    },
    subject: { 
        type: String, 
        required: true, 
    },
    chapter: { 
        type: String, 
        required: true, 
    },
});

module.exports=mongoose.model("Video",videoSchema);