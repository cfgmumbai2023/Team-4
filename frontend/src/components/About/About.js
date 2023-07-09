import React from 'react';
import './About.css'; 
import aboutImg from "../../images/about.webp";
const AboutUs = () => {
  return (
    <div className='row'>
    <div className='col-md-6'>
    <div className="about-us-container">
      <h1>About Us</h1>
      <h3 style={{color:"#c8c49c"}}>SEVA SINCE 1968</h3>
      
      <p className="about-us-description">
      Started in 2023 JEET is on a Not-for-profit Mission to unite all the NGOs deeply engaged in education (sports & vocational included). Our idea is to improve the reach and richness of quality education to the disadvantaged and disabled, thus eliminate educational inequality in India, persisting for decades:

National literacy rate is only 77.7%, India is home to highest number of illiterates in the world.

About 190 million students up to Standard XII are suffering from poor quality learning and outcomes.

To top it all, inclusion is a distant dream making disability a serious barrier to education.

​

The vision of JEET is to create a society where all students up to Standard XII, regardless of their socio-economic and linguistic background, disabilities or challenging situations, shall have access to excellent quality education or sports or skill development, to reach their full potential.

​</p>
    </div>
    </div>
    <div className='col-md-6'>
    <div className="about-us-image">
        <img src={aboutImg} style={{marginLeft:"-45px"}}/>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
