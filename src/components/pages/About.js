import React from 'react';
import '../../App.css';
import '../HeroSection.css';
export default  function About() {
  return (
    <div style={{
      background: `url('/images/img-9.jpg')`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'}}>

      <h1 className="about"> About Us</h1>
    </div>
  )
}

