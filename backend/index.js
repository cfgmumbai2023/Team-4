<<<<<<< HEAD

=======
>>>>>>> 656f98dee9317d869fd0692a29d3ba51a299bf17
const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT||8000;

const dbConnect=require('./config/database');
dbConnect();

const route=require('./routes/route');
app.use('/jeet',route);

<<<<<<< HEAD
app.listen(PORT,()=>{console.log("server is live on port no ",PORT);});
=======
app.listen(PORT,()=>{console.log("server is live on port no 8000");});
>>>>>>> 656f98dee9317d869fd0692a29d3ba51a299bf17
