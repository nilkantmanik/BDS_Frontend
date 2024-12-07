import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Connect from './BlueticDraftIMGS/ConnectUsImg.jpg';
import axios from 'axios';
function ConnectUs() {
  const [formValue, setFormavalue] = React.useState({
    Name: '',
    Email: "",
    Company: "",
    PhNumber: "",
    Message: ""
  })


  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    const notFilled = []
    if (formValue?.Name == "" || formValue?.Name == undefined || formValue?.Name == null) {
      notFilled.push(" " + "Name")
    }
    if (formValue?.Email == "" || formValue?.Email == undefined || formValue?.Email == null) {
      notFilled.push(" " + "Email")
    }
    if (notFilled?.length > 0) {
      alert(`Please fill the ${notFilled}`)
    } else {
      if (validateEmail(formValue?.Email)) {
         const Body: any = `
    <h3>Name: ${formValue?.Name}</h3>
    <h4>Email: ${formValue?.Email}</h4>
    <h4>Company: ${formValue?.Company}</h4>
    <h4>Contact Number: ${formValue?.PhNumber}</h4>
    <h4>Message: ${formValue?.Message}</h4>
`
        const sendMailData = {
          email: formValue?.Email,
          subject: 'Sending from BDS website!',
          message: Body,
        };

        const response = await axios.post('https://blueticdraftscalebackend.onrender.com/sendEmail', sendMailData);
        console.log(response.data)
        alert('Mail sent successfully')
      } else {
        // console.log("Invalid email address");
        alert('Please provide valid email address')
        // console.
      }

      // console.log(formValue)
    }
  };

  function validateEmail(email: any) {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }


  return (
    <div className="sectionSpace container" style={{ marginBottom: '30px', marginLeft: '0px', marginTop: '40px' }}>
      <div className='row' style={{ width: '100%' }}>
        <div className='col-md-6'>
          <img src={Connect} alt='' style={{ width: '100%', height: '100%' }} />
        </div>
        <div className='col-md-6'>
          <h3>
            <span style={{ color: "#2A363B" }}>
              CONTACT
            </span>
            <span style={{ color: "#f2c014" }}>
              &nbsp; US
            </span>
          </h3>
          <p style={{ textAlign: 'left' }}>
            WHEN YOU NEED EXPERIENCE, WE HAVE IT COVERED.
          </p>

          <div style={{ height: '30px' }}></div>

          <form className="row g-3 connectUs" >
            <div className="col-md-6">
              <label id="validationDefault01" className="form-label">Name</label>
              <input type="text" className="form-control" id="validationDefault01" required
                onChange={(event) => {
                  setFormavalue((c) => ({
                    ...c,
                    Name: event.target.value as string,
                  }))
                }} 
                placeholder='Enter your name'
                />
            </div>

            <div className="col-md-6">
              <label id="validationDefaultUsername" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required
                  onChange={(event) => {
                    setFormavalue((c) => ({
                      ...c,
                      Email: event.target.value as string,
                    }))
                  }}
                  placeholder='Enter your email'
                />
              </div>
            </div>
            <div className="col-md-12">
              <label id="validationDefault03" className="form-label">Company</label>
              <input type="text" className="form-control" id="validationDefault03"
                onChange={(event) => {
                  setFormavalue((c) => ({
                    ...c,
                    Company: event.target.value as string,
                  }))
                }} 
                placeholder='Enter your company name'
                />
            </div>
            <div className="col-md-12">
              <label id="validationDefault03" className="form-label">Contact Number</label>
              <input type="text" className="form-control" id="validationDefault03"
                onChange={(event) => {
                  setFormavalue((c) => ({
                    ...c,
                    PhNumber: event.target.value as string,
                  }))
                }} 
                placeholder='Enter your contact number'
                />
                
            </div>

            <div className="col-md-12">
              <label id="validationDefault05" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder='Enter message'
                onChange={(event) => {
                  setFormavalue((c) => ({
                    ...c,
                    Message: event.target.value as string,
                  }))
                }}
              ></textarea>
            </div>

            <div className="col-12">
              <button className="btn btn-warning" type="submit" onClick={onSubmitForm}>Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ConnectUs;