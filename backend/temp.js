// const fs = require('fs');
// const csv = require('csv-parser');
// const { MongoClient } = require('mongodb');
// const Video = require('./models/Video');
// const mongoose = require('mongoose')


// require("dotenv").config();

//   // Define the MongoDB connection URL
// const mongodbUrl = process.env.ATLAS_URI;


// // Connect to MongoDB
// // Read the CSV file and insert the data into the database
// // const connectDB = () => { 
//     mongoose
//     .connect(mongodbUrl, { 
//       useNewUrlParser: true, 
//       useUnifiedTopology: true 
//     })
//     .then(() => {
//       console.log('MongoDB connection established...');
  
//       // Read the CSV file and insert the data into the database
//       fs.createReadStream('data.csv')
//         .pipe(csv())
//         .on('data', (row) => {
//           // Create a new video document based on the CSV row
//           const video = new Video({
//             url: row.url,
//             title: row.title,
//             author: row.author,
//             views: parseInt(row.views),
//             lang: row.lang,
//             grade: parseInt(row.grade),
//             subject: row.subject,
//             chapter: row.chapter
//           });
  
//           // Save the video document to the database
//           video.save()
          
//             .then(() => {
//               console.log('Video saved:', video.title);
//             })
//             .catch((error) => {
//               console.error('Error saving video:', error);
//             });
//         })
//         .on('end', () => {
//           console.log('CSV file successfully processed');

//         setTimeout(() => {
//             mongoose.connection.close();
//         }, 5);
//       });
//     })
//     .catch((error) => {
//       console.error('Error connecting to MongoDB:', error);
//     });
  
// // }
// //   module.exports = connectDB;
  
  
  