const express=require('express');
const app=express();
const cors=require('cors');

require('dotenv').config();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT||5000;

const dbConnect=require('./config/database');
dbConnect();

const route=require('./routes/route');
app.use('/jeet',route);

app.listen(PORT,()=>{console.log("server is live on port no 5000");});
