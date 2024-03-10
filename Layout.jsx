import { Outlet,Link } from "react-router-dom";
import './layout.css'

const Layout=()=>{
  return(
    <>
    <nav>
      <ul>
        <li>
        <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to="/Aboutus">Aboutus</Link>
        </li>
        
        <li>
          <Link to="/Login">Login</Link>
        </li>
        
        <li>
          <Link to="/Register">Signup</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
       
        <li>
          <Link to="/Blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/Page">Logout</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
};

export default Layout;

