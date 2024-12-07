import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
function BlueticDraftFooter() {
  return (
    <div>
      <footer style={{background:'#0E1F37',width:'100%'}}>
        <div className='container' style={{background:'#0E1F37',width:'100%',paddingRight:'15px',paddingLeft:'15px',marginRight:'auto',marginLeft:"auto",paddingTop:'50px',paddingBottom:'50px'}}>
          <div className='row'style={{width:'100%'}}>
              <div className='col-md-6 ' >
                <div>
                  <p style={{fontSize:'18px',color:'#fff',textAlign:'left'}} className='paraStyle'>
                    <ul className='ICASstyles' style={{ listStyleType: "none" }}>
                      <li><i className="bi bi-arrow-right-short"></i> With a robust customer base in developed countries, we are positioned for rapid growth as we expand into new regions and deepen our presence in existing markets. Our strategic approach ensures that we effectively meet the evolving needs of our clients while enhancing our global footprint.</li>
                      <li><i className="bi bi-arrow-right-short"></i> 
                      Armed with cutting-edge technologies and a dedicated team, we pursue excellence in every project.</li>
                      <li><i className="bi bi-arrow-right-short"></i> We provide the best structural solutions, even in the most challenging situations, with customer satisfaction as our ultimate goal.</li>
                    </ul>
        
                  </p>
                </div>
              </div>
              <div className='col-md-6' >
                <div>
                <h3>
              <span style={{color:"#fff"}}>
              Contact
                </span>
                <span style={{color:"#f2c014"}}>
                &nbsp; US
                </span>
            </h3>
            <ul className='FooterLists'>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-geo-alt-fill"></i>
                  <p style={{marginLeft:'10px'}}>
                 Bangalore, Karnataka, India.
                  </p>
                </div>
              </li>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-telephone-fill" style={{transform: 'scaleX(-1)'}}></i>
                  <p style={{marginLeft:'10px'}}>
                  +919988776655
                  </p>
                </div>
              </li>
              <li>
                <div style={{display:'flex'}}>
                <i className="bi bi-envelope-fill"></i>
                  <p style={{marginLeft:'10px'}}>
                    <a href='mailto:sales@draftscale.com' className='MailTo'> sales@draftscale.com</a>
                 
                  </p>
                </div>
              </li>
            </ul>
                </div>
              </div>
              {/* <div className='col-md-6 col-lg-4'>
              <div>
                <h3>
              <span style={{color:"#fff"}}>
              SUBSCRIBE
                </span>
                <span style={{color:"#f2c014"}}>
                &nbsp; US
                </span>
            </h3>
            <p style={{color:'#fff',textAlign:'left'}}>
            Stay updated with our latest news. We promise not to spam!
            </p>
            <form >
            <div>
            <input type="text" className="form-control" id="validationTooltip01" placeholder="Your email" />
            </div>
            </form>
                </div>
              </div> */}
          </div>

        </div>
      </footer>
      <div style={{background:'#000000',display:'flex',justifyContent:'space-evenly',padding:'10px'}}>
        <div style={{textAlign:'center',color:'#fff',fontSize:'12px',paddingTop:'6PX'}}>
        <i className="bi bi-c-circle" style={{marginRight:'5px'}}></i>
              Copyright <b>BLUETIC DRAFTSCALE ENGINEERING PRIVATE LIMITED</b>
          </div> 

          <div className='FooterIcon' style={{gap:'30px'}}>
            <div>    <i className="bi bi-facebook" ></i></div>
            <div><i className="bi bi-twitter-x" ></i></div>
            <div> <i className="bi bi-instagram" ></i></div>
            <div> <i className="bi bi-youtube" ></i></div> 
                </div>
      </div>
    </div>
  )
}

export default BlueticDraftFooter;
