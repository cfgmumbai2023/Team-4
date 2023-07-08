const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");


require("dotenv").config();

//basic setup
const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/", (req, res) => {
    res.send("Welcome to My Educational Hub API...");
});

const uri = process.env.MONGODB_KEY;
const port = process.env.PORT || 5000;

//start app on port 5000
app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});


//Mongo DB connection
//used promises technique

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connection established..."))
    .catch((error) => console.error("MongoDB connection failed:", error.message));



