import React from 'react';
import "./Login.css";

export default function Login() {
  return (
    <div className='Loginbg'>
      <div className="login">
        <h1>Login Form</h1>
        <div>
          <center>
          <img  className='logimg' src="https://t3.ftcdn.net/jpg/02/05/50/06/240_F_205500629_DHERSpg0Yi9fwd0NFkrq1kSq56cwjqHm.jpg" />
            <form>
              <table className='logincss'>
               
                <tr>  
                  <td><label> User Name:</label></td> 
                  <td><input type='text' placeholder='Enter your name here' required/></td>
                </tr>
                
                <tr>
                  <td><label>Email Address:</label></td> 
                  <td><input type='text' placeholder='Enter your email here' required/></td>
                </tr>

                <tr>
                  <td><label>Password:</label></td>
                  <td><input type='password' placeholder='Enter your Password' required/></td>
                </tr>

                

               

                <tr>
                  <td colSpan="2" align="center">
                    <button type="button">Login</button>
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
