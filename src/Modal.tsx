import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import MSD1 from './BlueticDraftIMGS/Misc-steel1.png';
import MSD2 from './BlueticDraftIMGS/Misc-steel2.png';
import MSD3 from './BlueticDraftIMGS/Misc-steel3.png';
import MSD4 from './BlueticDraftIMGS/Misc-steel4.png';
import MSD5 from './BlueticDraftIMGS/Misc-steel5.png';
import SSD1 from './BlueticDraftIMGS/structural-steel-1.png';
import SSD2 from './BlueticDraftIMGS/structural-steel-2.png';
import SSD3 from './BlueticDraftIMGS/structural-steel-3.png';
import SSD4 from './BlueticDraftIMGS/structural-steel-4.png';
import SSD5 from './BlueticDraftIMGS/structural-steel-5.png';
import SSD6 from './BlueticDraftIMGS/structural-steel-6.png';

import BIM1 from './BlueticDraftIMGS/BIM-1.jpg';
import BIM2 from './BlueticDraftIMGS/BIM-2.jpg';
import BIM3 from './BlueticDraftIMGS/BIM-3.jpg';
import BIM4 from './BlueticDraftIMGS/BIM-4.jpg';
function MyModal(props:any) {
  const SSDImages=[SSD1,SSD2,SSD3,SSD4,SSD5,SSD6];
  const MSDImages=[MSD1,MSD2,MSD3,MSD4,MSD5];
  const BIMImages=[BIM1,BIM2,BIM3,BIM4];
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" 
    dialogClassName="modal-xl">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       { props?.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
  

        <div className='container'>
          <div className="row">
          {
            props?.heading==="STRUCTURAL STEEL DETAILING"&&(<>
            {
              SSDImages.map((ele,index)=>{
                return(
                  <div className='col-lg-4 col-md-6' key={index}>
                  <img src={ele} alt="" style={{height:'140px',width:"90%",marginBottom:'10px'}}/>
                    </div>
                )
              })
            }
            </>)
          }
           {
            props?.heading==="MISCELLANEOUS STEEL DETAILING"&&(<>
            {
              MSDImages.map((ele,index)=>{
                return(
                  <div className='col-lg-4 col-md-6' key={index}>
                  <img src={ele} alt="" style={{height:'140px',width:"90%",marginBottom:'10px'}}/>
                    </div>
                )
              })
            }
            </>)
          }
           {
            props?.heading==="BIM MANAGEMENT"&&(<>
            {
              BIMImages.map((ele,index)=>{
                return(
                  <div className='col-lg-4 col-md-6' key={index}>
                  <img src={ele} alt="" style={{height:'140px',width:"90%",marginBottom:'10px'}}/>
                    </div>
                )
              })
            }
            </>)
          }

          </div>

        </div>
      
      }

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
