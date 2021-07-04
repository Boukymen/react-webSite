import React from 'react';
import '../../App.css';
import '../HeroSection.css';
export default  function Trailler() {
  return (
    <div>

      <video src={'/videos/video-2.mp4'} autoPlay loop muted style={{width: '100%', height: '100%'}}/>
      <h1 className="about" style={{paddingTop: '100px', paddingLeft: '10px', }} > at the forefront of <br/> technology</h1>
      <div style={{width: '100%', height: '600px'}} ></div>
    </div>
  )
}

