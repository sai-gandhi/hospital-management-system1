import React from 'react';
import "./Register.css";

export default function Register() {
  return (
    <div>
      <div className="reg">
        <h1>Register Form</h1>
        <div>
          <center>
            <form>
              <table className='regcss'>
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
                  <td><label>Gender:</label></td> 
                  <td><input type='text' placeholder='Enter your Gender here' required/></td>
                </tr>

                <tr>
                  <td><label htmlFor="role">Select Blood Group Type:</label></td>
                  <td>
                    <select id="role" name="role">
                      <option value="">-Select-</option>
                      <option value="O+">O+</option>
                     
                      <option value="A+">A+</option>
                      
                      <option value="B+">B+</option>
                      
                      <option value="AB+">AB+</option>
                      
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
    </div>
  );
}
