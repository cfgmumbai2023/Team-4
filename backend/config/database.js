const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
    mongoose
    .connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("connection between mongoose and database established."))
    .catch((error)=>{
        console.log("error in connecting to database.");
        console.error(error);
        process.exit(1);
    })
};
module.exports=dbConnect;
