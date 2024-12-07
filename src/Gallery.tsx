import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyModal from './Modal';
import GalleryCard1 from './BlueticDraftIMGS/sts.jpg';
import GalleryCard2 from './BlueticDraftIMGS/MISCELLANEOUS.jpg';
import GalleryCard3 from './BlueticDraftIMGS/BIM.jpeg';


function Gallery(props:any) {
  console.log(props)
  const [modalShow, setModalShow] = React.useState(false);
  const[modalContent,setModalContent]=React.useState({
    Heading:'',
    BodyContent:"",
    Content1:"",
    Content2:"",
  });
  function onModalClick(heading:any){
    if(heading==="STRUCTURAL STEEL DETAILING"){
      const ModalCOntent={
        Heading:heading,
        Content1:"",
        Content2:"",
        BodyContent:"Structural steel detailing plays an important role in successfully handling the requirements of material, manpower, equipment and tools on site for fabricators. The up-to-date software used by BDS in 3D modeling, 2D drafting and steel fabrication drawings detects any clash or extraneous part in a structure during the initial stages, which helps our clients remedy it at the planning phase itself. When you give us the task of doing the design of steel structures, we make sure there is no miscommunication among the architects, engineers and contractors resulting in a vibrant team bonding throughout the project."
      }
      setModalContent(ModalCOntent)
      setModalShow(true)
    }
    if(heading==="MISCELLANEOUS STEEL DETAILING"){
      const ModalCOntent={
        Heading:heading,
        BodyContent:'Our portfolio spans across structural steel elements such as complex staircases, hand-railings and other intricate misc. steel construction items. We understand the detailing needs from a fabrication point of view and execute comprehensive drawings that are conformed to your unique requirements.',
        Content1:'Using the latest 3D modeling tools and in compliance with the AISC code, we will make sure you present your bids on time and in entirety.',
        Content2:'No job is too small for us and nothing is miscellaneous when you add an element of technical clarity to it.',
        
      }
      setModalContent(ModalCOntent)
      setModalShow(true)
    }
    if(heading==="BIM MANAGEMENT"){
      const ModalCOntent={
        Heading:heading,
        BodyContent:'By combining our staff’s experience with the latest 3D technology, we can provide BIM Coordination Services in support of Fabricators, Contractors or Owners to provide clash detection and problem resolution before issues arise in the field. BIM is an intelligent 3D model-based process that gives construction professionals the insight to more efficiently plan, design and construct a project.',
        Content1:"",
        Content2:'',
        
      }
      setModalContent(ModalCOntent)
      setModalShow(true)
    }

  }


  return (
    <div  className="sectionSpace container" style={{marginBottom:'30px'}}>

      <div className='row' style={{width:'100%'}}>
      <div className='col-12 text-center'>
          <h3>
            <span style={{color:"#0E1F37"}}>Our
              </span> 
              <span style={{color:"#f2c014"}}>
              &nbsp;  Gallery
              </span>
              </h3>
          <p style={{textAlign:'center',color:"#0E1F37"}} className='SubTitle'>
            BLUETIC DRAFT SCALE
          </p>
            {/* <p style={{letterSpacing:'.7em',display:'grid'}}>BLUETIC DRAFT SCALE
        <span style={{width:'12%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
        </p> */}
        </div>
        <div className='col-md-4 main-container' style={{marginTop:'20px'}}>

  <img className="image" src={GalleryCard1} alt="" style={{width:'100%',height:'350px'}}></img>
  <div className="overlay">
    <h4 className="text-h1">STRUCTURAL STEEL DETAILING</h4>
    <button type="button" className="btn btn-dark button" onClick={() =>onModalClick('STRUCTURAL STEEL DETAILING')}>View More</button>
  </div>
     
        </div>

        <div className='col-md-4 main-container' style={{marginTop:'20px'}}>

<img className="image" src={GalleryCard2} alt="" style={{width:'100%',height:'350px'}}></img>
<div className="overlay">
  <h4 className="text-h1">MISCELLANEOUS STEEL DETAILING</h4>
  <button type="button" className="btn btn-dark button"
  onClick={() =>onModalClick('MISCELLANEOUS STEEL DETAILING')}
  >View More</button>
</div>
   
      </div>
      <div className='col-md-4 main-container' style={{marginTop:'20px'}}>

<img className="image" src={GalleryCard3} alt="" style={{width:'100%',height:'350px'}}></img>
<div className="overlay">
  <h4 className="text-h1">BIM MANAGEMENT</h4>
  <button type="button" className="btn btn-dark button"
    onClick={() =>onModalClick('BIM MANAGEMENT')}
  >View More</button>
</div>
   
      </div>


      </div>
    {  modalShow&&<MyModal show={modalShow} onHide={()=>{setModalShow(false)}} heading={modalContent?.Heading} content={modalContent?.BodyContent} Content1={modalContent?.Content1}  Content2={modalContent?.Content2} />}
    </div>

  )
}

export default Gallery;