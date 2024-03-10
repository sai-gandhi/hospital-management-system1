import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Blog from "./components/Blogs";
import Page from "./components/Page";
import Home from "./components/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Login from "./components/Login";
import Register from "./components/Register";


export default function App() {
  return (
    
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Blogs" element={<Blog />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Aboutus" element={<Aboutus/>}/>
          <Route path="Login" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
          <Route path="Page" element={<Page/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

