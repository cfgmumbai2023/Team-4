
import React, { useState } from "react";
import jeetlogo from '../../images/JEETfinalLOGO.webp' 
import "bootstrap/dist/css/bootstrap.css";
import InputType from "../Navbar/InputType";
import axios from 'axios';

const YouTubeEmbed = ({ videoId }) => {

  return (
    <div>
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const VideoList = ({ videos }) => {
  const [search, setSearch] = useState("");
  const [results,setResults]=useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality or any other action
    console.log("Search submitted:", search);
    fetchData(search);
  };
  const fetchData=async(search)=>{
    try{
      console.log("hi",search);
      const resp = await axios.get("http://localhost:5000/jeet/videos/search",{text: search});
      console.log(resp);
      setResults(resp);
    }catch(error){
      console.log("error in fetching serach results",error.message);
    }
  }
  return (
    <div className='my-3'>
            <form className="d-flex" onSubmit={handleSubmit}>
            <InputType
              labelText={"Search"}
              labelFor={"forsearch"}
              inputType={"text"}
              name={"search"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
          {/* {JSON.stringify(results.data)} */}
          {
         (results && results.data) ? results.data.videos.map((video)=>(
        <div key={video.id}>
          <h2>{video.title}</h2>
          <YouTubeEmbed videoId={video.videoId} />
          <p>{video.description}</p>
          {/* Add other metadata fields */}
        </div>
      )):
      videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <YouTubeEmbed videoId={video.videoId} />
          <p>{video.description}</p>
          {/* Add other metadata fields */}
        </div>
      ))}
    </div>
  );
};

const App = () => {

  const videoData = 
  [
    {
      "": 0,
      "url": "https://www.youtube.com/watch?v=7tBipMcSZ3c",
      "title": "0. 9C02 भूमिका | Introduction",
      "author": "Avanti Sankalp",
      "views": 44765,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 1,
      "url": "https://www.youtube.com/watch?v=TOor3BL-6z8",
      "title": "1. 9C02.1 CV0 पढ़ने का उद्देश्य | Learning Objectives",
      "author": "Avanti Sankalp",
      "views": 11424,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 2,
      "url": "https://www.youtube.com/watch?v=FldWZFNHpu8",
      "title": "2. 9C02.1 CV1 मिश्रण से परिचय | INTRODUCTION TO MIXTURES",
      "author": "Avanti Sankalp",
      "views": 28079,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 3,
      "url": "https://www.youtube.com/watch?v=CqTJFVmKrUs",
      "title": "3. 9C02.1 CV2 मिश्रण के प्रकार | TYPES OF MIXTURES",
      "author": "Avanti Sankalp",
      "views": 21306,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 4,
      "url": "https://www.youtube.com/watch?v=RQE1EC29C1A",
      "title": "4. 9C02.1 CV3 विलयन | SOLUTIONS",
      "author": "Avanti Sankalp",
      "views": 16626,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 5,
      "url": "https://www.youtube.com/watch?v=ogKp3sNMJAI",
      "title": "5. 9C02.1 CV4-I विलयन की सांद्रता | CONCENTRATION OF A SOLUTION",
      "author": "Avanti Sankalp",
      "views": 29690,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 6,
      "url": "https://www.youtube.com/watch?v=5vS8wsIKXls",
      "title": "6. 9C02.1 CV4-II विलयन की सांद्रता | CONCENTRATION OF A SOLUTION",
      "author": "Avanti Sankalp",
      "views": 16647,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    },
    {
      "": 7,
      "url": "https://www.youtube.com/watch?v=qT6v5MPxNxI",
      "title": "7. 9C02.1 CV5 निलंबन 1 | SUSPENSIONS",
      "author": "Avanti Sankalp",
      "views": 12588,
      "lang": "hindi",
      "grade": 9,
      "subject": "science",
      "chapter": "Is Matter Around Us Pure"
    }    
  ];

  const extractVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  const parsedVideoData = videoData.map((video) => ({
    id: video.id,
    videoId: extractVideoId(video.url),
    title: video.title
  }));

  return (
    <div>
      <VideoList videos={parsedVideoData} />
    </div>
  );
};

export default App;
