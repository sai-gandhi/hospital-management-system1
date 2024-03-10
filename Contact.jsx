import "./Contact.css";

const Contact = () => {
    return(
      <div className="contactbg">
        <div className="container">
          <img className="img1" src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="contact1"/>
          <h4 align="center">Request A Demo</h4>
          <p align="center">Write to us, and we will call you!</p>
        </div>
        <div className="contact">
        
        <div>
          <center>
            <form>
              <table className='contactcss'>
                <tr>  
                  <td><label>Name:</label></td> 
                  <td><input type='text' placeholder='Enter your name here' required/></td>
                </tr>
                
                <tr>
                  <td><label>Email Address:</label></td> 
                  <td><input type='text' placeholder='Enter your email here' required/></td>
                </tr>

                <tr>
                  <td><label>Mobile Number:</label></td> 
                  <td><input type='text' placeholder='Enter your Mobile number here' required/></td>
                </tr>

                <tr>
                  <td><label>Clinic/Hospital/Org Name:</label></td> 
                  <td><input type='text' placeholder='Enter your Gender here' required/></td>
                </tr>

               
                <tr>
                  <td><label htmlFor="role">Profession:</label></td>
                  <td>
                    <select id="role" name="role">
                      <option value="">-Select-</option>
                      <option value="Doctor">Doctor</option>
                      <option value="staff">Staff</option>
                      <option value="Patient">Patient</option>
                     
                     
                    </select>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" align="center">
                    <button type="button">SAVE</button>
                  </td>
                </tr>
              </table>
            </form>
          </center>
        </div>
      </div>
      <div className="copy1">
    <h4 align="center">Copyright © Docpulse - All Rights Reserved | Privacy Policy</h4>
   </div>
      </div>
    )
};

export default Contact;

