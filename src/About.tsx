import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import AboutCard1 from './BlueticDraftIMGS/AboutImg2.jpg';
import AboutCard2 from './BlueticDraftIMGS/AboutImg1.jpeg';
function About() {
  return (
    <div>
      
    <div className="container-fluid">
       <div className="row">
    
      <div className="col-md-6 AboutContainer">
    <div className="left">
    <img src={AboutCard1} alt='' style={{width:'100%'}}/>
    </div>
    <div className="right">
    <img src={AboutCard2} alt='' style={{width:'100%'}}/>
    </div>
      </div>
      <div className="col-md-6">
        <h3 style={{display:'inline-grid'}}>
          <span style={{color:"#0E1F37",fontWeight:'800'}}>
            WELOCME TO
            </span>
            <span style={{color:"#f2c014",fontWeight:'800'}}>
            &nbsp; BLUETIC DRAFT SCALE
            </span>
        </h3>
        <p style={{marginTop:'21px',letterSpacing:'.7em',display:'grid',color:"#0E1F37"}}>ABOUT US
        <span style={{width:'12%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
        </p>
        <div style={{marginTop:'65px'}}></div>
        <p style={{textAlign:'left',marginBottom:'24px'}}>Welcome to Bluetic Draftscale Engineering Private Limited, a pioneering company founded by Ajay and Sindhuja in August 2023. Specializing in structural steel detailing, we blend precision craftsmanship with innovative solutions. Our dedicated team is committed to exceptional quality, consistently meeting and exceeding client expectations. Join us as we shape the landscape of engineering excellence together.</p>
        <p style={{textAlign:'left',marginBottom:'24px'}}>
        Our blend of engineering expertise and exceptional customer service gives our company a distinct advantage. This edge has driven our consistent growth, allowing us to serve clients in top international markets today.
        </p>
        <div style={{marginTop:'60px'}}></div>
        {/* <h4>Our Moto</h4> */}
        <h3>
          <span style={{color:"#0E1F37"}}>
          Our
            </span>
            <span style={{color:"#f2c014"}}>
            &nbsp;  Moto
            </span>
        </h3>
        <div style={{marginTop:'25px'}}></div>
        <p style={{textAlign:'left'}}>
        We provide reliable solutions to the most complex structural challenges, delivering 100% accuracy every time.
        </p>
      </div>
 
  </div>

    


    </div>
    </div>

  )
}

export default About;