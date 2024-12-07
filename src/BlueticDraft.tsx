import React, { useState, useRef } from "react";
import "./BlueticDraft.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Home";
import About from "./About";
// import Services from './Services';
import Gallery from "./Gallery";
import ConnectUs from "./ConnectUs";
// import ServiceDetailing from './ServiceDetailing';
import BlueticDraftFooter from "./BlueticDraftFooter";
import Service from "./BlueticDraftIMGS/ImageService.jpg";
import BDSLogo from "./BDS_LOGO24.png";
import structualDetailing from "./BlueticDraftIMGS/structural-steel-detailing-service.jpeg";
import structualDetailing2 from "./BlueticDraftIMGS/structural-steel-detailing-service2.jpeg";
import MISCELLANEOUSDetailing from"./BlueticDraftIMGS/mis-detailing-service.jpeg";
// import MISCELLANEOUSDetailing2 from"./BlueticDraftIMGS/mis-detailing-service2.jpg";

function BlueticDraft() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const connectRef = useRef(null);
  const servicesRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [servicePageImage, setservicePageImage] = useState<any>('');
  const [ServiceType, setServiceType] = useState("");
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (index:any,ref: any, event: any) => {
    setShowServiceDetails(false);
    setActiveIndex(index)
    if (ref && ref.current) {
      scrollToSection(ref);
      setIsActive(false);
      event.preventDefault();
    }
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  function ShowDetailService(serviceType: any) {
    setShowServiceDetails(true);
    setServiceType(serviceType);
    if(serviceType=="STRUCTURAL STEEL"){
      setservicePageImage(structualDetailing)
    }else if(serviceType=="MISCELLANEOUS STEEL"){
      setservicePageImage(MISCELLANEOUSDetailing)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  return (
    <div className="App">
      <div
        style={{ height: "80px", background: "#0E1F37", position: "relative" }}
      >
        <header>
          <div className="container-fluid">
            <div
              className="row"
              style={{
                display: "flex",
                position: "fixed",
                width: "100%",
                top: "0",
                opacity: "0.98",
                zIndex: "1000",
              }}
            >
              <div className="nav-wrapper">
                <nav className="navbar">
                  <img src={BDSLogo} alt="Company Logo"></img>
                  <div
                    className={
                      isActive ? "menu-toggle is-active" : "menu-toggle"
                    }
                    id="mobile-menu"
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                  <ul
                    className={
                      isActive ? "nav no-search mobile-nav" : "nav no-search"
                    }
                    style={{ overflowY: isActive ? "auto" : "hidden" }}
                  >
                    <li
                      className="nav-item"
                      style={{ color: isActive ? "#000" : "defaultColor" }}
                    >
                      <a
                        href="/#"
                        onClick={(eve) => handleNavClick(0,homeRef, eve)}
                        className={activeIndex === 0?"linkSelected":""}
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: isActive ? "#000" : "defaultColor" }}
                    >
                      <a
                        href="/#"
                        onClick={(eve) => handleNavClick(1,aboutRef, eve)}
                        className={activeIndex === 1?"linkSelected":""}
                      >
                        About
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: isActive ? "#000" : "defaultColor" }}
                    >
                      <a
                        href="/#"
                        onClick={(eve) => handleNavClick(2,servicesRef, eve)}
                        className={activeIndex === 2?"linkSelected":""}
                      >
                        Services
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: isActive ? "#000" : "defaultColor" }}
                    >
                      <a
                        href="/#"
                        onClick={(eve) => handleNavClick(3,galleryRef, eve)}
                        className={activeIndex === 3?"linkSelected":""}
                      >
                        Gallery
                      </a>
                    </li>
                    <li
                      className="nav-item"
                      style={{ color: isActive ? "#000" : "defaultColor" }}
                    >
                      <a
                        href="/#"
                        onClick={(eve) => handleNavClick(4,connectRef, eve)}
                        className={activeIndex === 4?"linkSelected":""}
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
      <main>
        {!showServiceDetails && (
          <section ref={homeRef}>
            <Home />
          </section>
        )}
        {!showServiceDetails && (
          <section ref={aboutRef} className="sectionStyle">
            <About />
          </section>
        )}
        <section
          ref={servicesRef}
          className={showServiceDetails ? "" : "sectionStyle"}
        >
          <div>
            {!showServiceDetails && (
              <div className="container-fluid" style={{ position: "relative" }}>
                <div style={{ maxHeight: "600px" }}>
                  <img
                    src={Service}
                    alt=""
                    className="serviceImageStyle"
                    style={{ width: "100%", maxHeight: "inherit" }}
                  />
                </div>
                <div className="ServicePageTexts">
                  <h3 className="ServicePageTitle">
                    OUR
                    <span className="BDSSecondayColor"> EXPERTISE </span>
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      marginTop: "0.5rem",
                    }}
                    className="SubTitle"
                  >
                    BLUETIC DRAFT SCALE
                  </p>
                </div>
                <h5
                  className="Services service1"
                  onClick={() => {
                    ShowDetailService("STRUCTURAL STEEL");
                    scrollToTop()
                  }}
                >
                  STRUCTURAL
                  <span className="BDSSecondayColor"> STEEL </span>
                </h5>
                <h5
                  className="Services service2"
                  onClick={() => {
                    ShowDetailService("MISCELLANEOUS STEEL");
                    scrollToTop()
                  }}
                >
                  MISCELLANEOUS
                  <span className="BDSSecondayColor"> STEEL </span>
                </h5>
                <h5
                  className="Services service3"
                  onClick={() => {
                    ShowDetailService("BIM MANAGEMENT");
                    scrollToTop()
                  }}
                >
                  BIM
                  <span className="BDSSecondayColor"> MANAGEMENT </span>
                </h5>
                <h5
                  className="Services service4"
                  onClick={() => {
                    ShowDetailService("STRUCTURAL CONNECTION DESIGN");
                    scrollToTop()
                  }}
                >
                  STRUCTURAL CONNECTION
                  <span className="BDSSecondayColor"> DESIGN </span>
                </h5>
                <h5
                  className="Services service5"
                  onClick={() => {
                    ShowDetailService("STRUCTURAL ESTIMATION");
                    scrollToTop()
                  }}
                >
                  STRUCTURAL
                  <span className="BDSSecondayColor"> ESTIMATION </span>
                </h5>
              </div>
            )}
            {showServiceDetails && (
              <div>
              
                  <div style={{ position: "relative", maxHeight: "300px",display:'flex',justifyContent:'center' }}>


                {ServiceType === "STRUCTURAL STEEL"&& ( 
                  <>
                    <img
                    src={servicePageImage}
                    alt=""
                    style={{ width: "100%", maxHeight: "inherit" }}
                  ></img>
                <img
                    src={structualDetailing2}
                    alt=""
                    style={{ width: "100%", maxHeight: "inherit" }}
                  ></img>
                  </>
                    )}
                    {ServiceType === "MISCELLANEOUS STEEL"&&  <img
                    src={servicePageImage}
                    alt=""
                    style={{ width:"50%", maxHeight: "inherit" }}
                  ></img>}

                    </div>

                <div className="container ">
                  <div className="row" style={{ justifyContent: "center" }}>
                    <div className="col-md-6">
                      {ServiceType === "STRUCTURAL STEEL" && (
                        <>
                          <h3 style={{ fontWeight: 500 ,display:'grid'}}>STRUCTURAL STEEL
                          <span style={{width:'30%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
                          </h3>
                          
                          <p className='serviceDetailingPara'>
                          When it comes to effectively managing the material, labor, equipment, and tool requirements of fabricators on the job site, structural steel detailing is crucial. Modern software that BDS uses for 2D drafting, 3D modeling, and steel fabrication drawings finds conflicts or unnecessary parts in a building early on, allowing our clients to address them during the planning stage. When you assign us the job of designing steel structures, we make sure that the contractors, engineers, and architects are all communicating with each other clearly, which fosters strong team dynamics throughout the project.
                          </p>
                          <p  className='serviceDetailingPara' >
                          We manufacture models, erection and shop detail drawings, material lists in many formats, and more using the most recent 3D modeling software from Tekla encompassing KSS and EJE.

                          </p>
                          <p  className='serviceDetailingPara'>
                          A big benefit of using 3D software is our ability to produce CNC and DXF files directly from the model for automated fab facilities if needed.
                          </p>
                          <p  className='serviceDetailingPara'>
                          In order to meet the needs and schedules of the customer, we strive to deliver high-quality drawings that are prepared for manufacturing.
                          </p>

                          <h6> INTERNATIONAL CODES AND STANDARDS WE FOLLOW </h6>
                          <ul
                            className="ICASstyles"
                            style={{ listStyleType: "none" }}
                          >
                            <li>
                              <i className="bi bi-1-circle-fill"></i>
                              <b>AISC</b> - American Institute of Steel
                              Construction
                            </li>
                            <li>
                              <i className="bi bi-2-circle-fill"></i>
                              <b>AWS</b> - American Welding Society
                            </li>
                            <li>
                              <i className="bi bi-3-circle-fill"></i>
                              <b>CISC</b> - Canadian Institute of Steel
                              Construction
                            </li>
                            <li>
                              <i className="bi bi-4-circle-fill"></i>
                              <b>OSHA</b>- Occupational Safety and Health
                              Administration
                            </li>
                          </ul>
                        </>
                      )}
                      {ServiceType === "MISCELLANEOUS STEEL" && (
                        <>
                          <h3 style={{ fontWeight: 500 ,display:'grid'}}>
                            MISCELLANEOUS STEEL
                            <span style={{width:'30%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
                          </h3>
                          <p  className='serviceDetailingPara'>
                          Our portfolio includes delicate structural steel features including handrailings, elaborate stairs, and other miscellaneous steel construction items. We provide detailed drawings that adhere to your specific specifications and comprehend the detailing required from a fabrication perspective.
                          </p>
                          <p  className='serviceDetailingPara'>
                          We'll make sure your proposals are submitted on time and in full, following the AISC code and utilizing the most recent 3D modeling technologies.
                          </p>
                          <p  className='serviceDetailingPara'>
                          Nothing is too minor for us to handle, and nothing becomes unrelated when you incorporate a technical element into it.
                          </p>
                        </>
                      )}
                      {ServiceType === "BIM MANAGEMENT" && (
                        <>
                          <h3 style={{ fontWeight: 500 ,display:'grid'}}>BIM MANAGEMENT
                          <span style={{width:'30%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
                          </h3>
                          <p  className='serviceDetailingPara'>
                          We may offer BIM Coordination Services to help Fabricators, Contractors, or Owners with clash identification and problem resolution before problems occur in the field by fusing our staff's experience with the newest 3D technology. With the use of BIM, an intelligent 3D model-based approach, construction professionals can plan, design, and build projects more effectively.
                          </p>
                        </>
                      )}
                      {ServiceType === "STRUCTURAL CONNECTION DESIGN" && (
                        <>
                          <h3 style={{ fontWeight: 500 ,display:'grid'}}>
                            STRUCTURAL CONNECTION DESIGN
                            <span style={{width:'30%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
                          </h3>
                          <p  className='serviceDetailingPara'>
                          Every connection design computation is carried out internally, overseen by one of our certified engineers. These connection designs are double-checked by our engineers to make sure they are adequate and economical.
                          </p>
                        </>
                      )}
                      {ServiceType === "STRUCTURAL ESTIMATION" && (
                        <>
                          <h3 style={{ fontWeight: 500 ,display:'grid'}}>
                            STRUCTURAL ESTIMATION/ TAKEOFFS
                            <span style={{width:'30%', borderBottom:'1px solid rgb(242, 192, 20)'}}></span>
                          </h3>
                           
                          <p  className='serviceDetailingPara'>
                          Our background in working in a fabrication plant gives us a unique perspective on the difficulties involved in project bidding. If needed, we are able to help with takeoffs or create preliminary models for estimation. Consider us to be an addition to your estimates division.
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-4">
                      <h5>SERVICES</h5>
                      <ul className="SSDServices">
                        <li
                          style={{
                            color:
                              ServiceType === "STRUCTURAL STEEL"
                                ? "rgb(242, 192, 20)"
                                : "",
                          }}
                          onClick={() => {
                            ShowDetailService("STRUCTURAL STEEL");
                            scrollToTop()
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{ color: "rgb(242, 192, 20)" }}
                          ></i>
                          Structural Steel
                        </li>
                        <li
                          style={{
                            color:
                              ServiceType === "MISCELLANEOUS STEEL"
                                ? "rgb(242, 192, 20)"
                                : "",
                          }}
                          onClick={() => {
                            ShowDetailService("MISCELLANEOUS STEEL");
                            scrollToTop()
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{ color: "rgb(242, 192, 20)" }}
                          ></i>
                          Miscellaneous Steel
                        </li>
                        <li
                          style={{
                            color:
                              ServiceType === "BIM MANAGEMENT"
                                ? "rgb(242, 192, 20)"
                                : "",
                          }}
                          onClick={() => {
                            ShowDetailService("BIM MANAGEMENT");
                            scrollToTop()
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{ color: "rgb(242, 192, 20)" }}
                          ></i>
                          BIM Management
                        </li>
                        <li
                          style={{
                            color:
                              ServiceType === "STRUCTURAL CONNECTION DESIGN"
                                ? "rgb(242, 192, 20)"
                                : "",
                          }}
                          onClick={() => {
                            ShowDetailService("STRUCTURAL CONNECTION DESIGN");
                            scrollToTop()
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{ color: "rgb(242, 192, 20)" }}
                          ></i>
                          Structural Connection Design
                        </li>
                        <li
                          style={{
                            color:
                              ServiceType === "STRUCTURAL ESTIMATION"
                                ? "rgb(242, 192, 20)"
                                : "",
                          }}
                          onClick={() => {
                            ShowDetailService("STRUCTURAL ESTIMATION");
                            scrollToTop()
                          }}
                        >
                          <i
                            className="bi bi-check-circle-fill"
                            style={{ color: "rgb(242, 192, 20)" }}
                          ></i>
                          Structural Estimation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        {!showServiceDetails && (
          <section ref={galleryRef} className="sectionStyle">
            <Gallery />
          </section>
        )}
        {!showServiceDetails && (
          <section ref={connectRef} className="sectionStyle">
            <ConnectUs />
          </section>
        )}

        <section>
          <BlueticDraftFooter />
        </section>
      </main>
    </div>
  );
}

export default BlueticDraft;
