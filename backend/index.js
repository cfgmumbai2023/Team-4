const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose");
const fs = require('fs');
const csv = require('csv-parser');
const { MongoClient } = require('mongodb');



require("dotenv").config();

//basic setup
const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//Here route would be there

app.get("/", (req, res) => {
    res.send("Welcome to My Educational Hub API...");
});

const port = process.env.PORT;

//Mongo DB connection

const connectDB = require("./config/database");
connectDB();


const mongodbUrl = process.env.ATLAS_URI;


// Connect to MongoDB
// Read the CSV file and insert the data into the database
// const connectDB = () => { 
    mongoose
    .connect(mongodbUrl, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    .then(() => {
      console.log('MongoDB connection established...');
  
      // Read the CSV file and insert the data into the database
      fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (row) => {
          // Create a new video document based on the CSV row
          const video = new Video({
            url: row.url,
            title: row.title,
            author: row.author,
            views: parseInt(row.views),
            lang: row.lang,
            grade: parseInt(row.grade),
            subject: row.subject,
            chapter: row.chapter
          });
  
          // Save the video document to the database
          video.save()
          
            .then(() => {
              console.log('Video saved:', video.title);
            })
            .catch((error) => {
              console.error('Error saving video:', error);
            });
        })
        .on('end', () => {
          console.log('CSV file successfully processed');

        //   mongoose.connection.close();
      });
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  
// }


//start app on port 5000
app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});





