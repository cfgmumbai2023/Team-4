import React from 'react';

class VideoList extends React.Component {
  render() {
    const { videos } = this.props;

    return (
      <div>
        {videos.map(video => (
          <div key={video.id}>
            <h2>{video.title}</h2>
            <iframe
              title={video.title}
              width="560"
              height="315"
              src={video.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    // Fetch JSON data from an API or set it manually
    const jsonData = [
        {
          "": 0,
          "url": "https://www.youtube.com/watch?v=tvluAyfcpso",
          "title": "8.1.1.1.A - 8th Std Maths Made Sweet Number system - Number collections Definition & Examples Recap",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 296,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 1,
          "url": "https://www.youtube.com/watch?v=W4OXsYL3kQc",
          "title": "8.1.1.1.B - 8th Std Maths Made Sweet - Equivalent Rational numbers & Standard form - Definition",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 129,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 2,
          "url": "https://www.youtube.com/watch?v=JlDad3eDpk8",
          "title": "8.1.1.1.C - 8th Std Maths Made Sweet Numbers - Comparing Rational numbers - Hints & Examples",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 132,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 3,
          "url": "https://www.youtube.com/watch?v=PO6olCU1ibM",
          "title": "8.1.1.1.D - 8th Std Maths Made Sweet Numbers - Rational numbers - Ascending & Descending order",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 106,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 4,
          "url": "https://www.youtube.com/watch?v=YvAzbkluFHQ",
          "title": "8.1.1.1.E - 8th Std Maths Made Sweet Numbers - Find the Rational number between two numbers",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 147,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 5,
          "url": "https://www.youtube.com/watch?v=OmErSbGHheI",
          "title": "8.1.1.1.F - 8th Std Maths Made Sweet Numbers - Rational number between two numbers - Exercise",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 105,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 6,
          "url": "https://www.youtube.com/watch?v=sGWIqW145sk",
          "title": "8.1.1.1.G - 8th Std Maths Made Sweet Numbers - Basic maths operations on Rational numbers - Exercise",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 79,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 7,
          "url": "https://www.youtube.com/watch?v=QB4--eb_TT4",
          "title": "8.1.1.1.H - 8th Std Maths Made Sweet Numbers - Basic maths operations on Rational numbers - Exercise",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 82,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 8,
          "url": "https://www.youtube.com/watch?v=XR0_mFRn2xk",
          "title": "8.1.1.2.A - 8th Std Maths Made Sweet Numbers - Rational numbers - Daily life problems - Exercise 1",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 96,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        },
        {
          "": 9,
          "url": "https://www.youtube.com/watch?v=Lxe2TsNzNPA",
          "title": "8.1.1.2.B - 8th Std | #MathsMadeSweet #Numbers - #Rationalnumbers - Daily life problems - Exercise 2",
          "author": "Maths Made Sweet",
          "desc": "",
          "views": 120,
          "lang": "tamil",
          "grade": 8,
          "subject": "mathematics",
          "chapter": "Number System"
        }]    

    this.setState({ videos: jsonData });
  }

  render() {
    const { videos } = this.state;

    return (
      <div>
        <h1>YouTube Videos</h1>
        <VideoList videos={videos} />
      </div>
    );
  }
}

export default App;
