import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
// const Images:any=require('./BlueticDraftIMGS/BDS-Home1.jpg')
import Slide1 from './BlueticDraftIMGS/HomePage1.jpg';
import Slide2 from './BlueticDraftIMGS/HomePageSlide2.jpg';
import Slide3 from './BlueticDraftIMGS/HomePageSlide-3.jpg';
import Card1 from './BlueticDraftIMGS/BDSCard1.jpg';
import Card2 from './BlueticDraftIMGS/BDSCard2.jpg';
import Card3 from './BlueticDraftIMGS/BDSCard3.jpg';



function Home() {

  const HomePageImages=[Slide1,Slide2,Slide3]

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HomePageImages.length);
  };

  const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? HomePageImages.length - 1 : prevIndex - 1));
  };

  return (
    <div>
     <div style={{position:'relative',maxHeight:'600px'}}>
        <img src={HomePageImages[currentImageIndex]} alt='' className='homePageImg' style={{width:'100%',maxHeight:'inherit'}}></img>
        <div style={{position:'absolute',left:'25%',top:'38%'}} className='HomePageTexts'>
        { currentImageIndex===0&& 
        <>
        <h3 className='HomePageTitle'>EXCELLENCE
           <span className='BDSSecondayColor'> & </span>INNOVATION
           </h3>
          <p className='HomePageSubTitle'>BUILT INTO
         <span  className='BDSSecondayColor'>EVERY DESIGN</span> 
          </p>
        </>}
        { currentImageIndex===1&& 
        <>
        <h3 className='HomePageTitle'>STRUCTURAL STEEL
           <span className='BDSSecondayColor'> & </span>DETAILING
           </h3>
          <p className='HomePageSubTitle'>TRUSTED BY 
         <span  className='BDSSecondayColor'>CLIENTS</span> 
          </p>
        </>}
        { currentImageIndex===2&& 
        <>
        <h3 className='HomePageTitle'>DURABILITY
           <span className='BDSSecondayColor'> & </span>QUALITY
           </h3>
          <p className='HomePageSubTitle'>BDS
         <span  className='BDSSecondayColor'>DELIVERED WITH PERFECTION</span> 
          </p>
        </>}
        </div>
       {currentImageIndex!==0&& <i className="bi bi-arrow-left-square-fill HomePageLeft"  onClick={handlePreviousImage}></i>}
       {currentImageIndex!==2&& <i className="bi bi-arrow-right-square-fill HomePageRight"  onClick={handleNextImage}></i>}
     </div>

     <div className="container">
       
          <div className="cards">
    <div className="card-item">
      <div className="card-image">
      <img src={Card1} alt='' style={{width:'100%'}}/>
      </div>
      <div className="card-info">
        <h2 className="card-title">25 + ENGINEERS </h2>
        <p className="card-intro">Engineering is the art of modelling materials we do not wholly understand, into shapes we cannot precisely analyse so as to withstand forces we cannot properly assess, in such a way that the public has no reason to suspect the extent of our ignorance</p>
      </div>
    </div>
  </div>

  <div className="cards">
    <div className="card-item">
      <div className="card-image">
      <img src={Card2} alt='' style={{width:'100%'}}/>
      </div>
      <div className="card-info">
        <h2 className="card-title"> 1K TONS PER MONTH</h2>
        <p className="card-intro">We proudly produce 1,000 tons per month, showcasing our commitment to consistency and quality. This impressive output allows us to meet the demands of our clients efficiently while maintaining the highest standards in every project.</p>
      </div>
    </div>
  </div>

  <div className="cards">
    <div className="card-item">
      <div className="card-image">
      <img src={Card3} alt='' style={{width:'100%'}}/>
      </div>
      <div className="card-info">
        <h2 className="card-title">100 + PROJECTS</h2>
        <p className="card-intro">
        Having completed over 100 projects in structural steel detailing, we have established a strong track record of excellence and precision. Each project showcases our dedication to delivering high-quality solutions that meet the unique needs of our clients, solidifying our position as a leader in the industry.</p>
      </div>
    </div>
  </div>

    
     </div>
 
    </div>
  )
}

export default Home;
