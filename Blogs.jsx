import "./Blogs.css"
const Blogs=()=>{
    <h1>Blogs page</h1>
    return(
        <div class="blog">
          <div align="center">
            <h3>Blog Page</h3>
          <tr>
          <label for name>Name</label>
           <td><input type="text" placeholder="Enter your name" /></td>
          </tr>
          <tr>
          <label for name>Mail</label>
           <td> <input type="text" placeholder="Enter your mail" /></td>
          </tr>
          <tr>
          <label for name>Password</label>
           <td> <input type="text" placeholder="Enter your Password" /></td>
          </tr>
          
         
           <button type="button">Submit</button>
           <button type="button">Reset</button>
          
          </div>
          <div class="elementor-icon-box-content">
    <h7 class="elementor-icon-box-title">
        
            Customer Focus
        
    </h7>
    <p class="elementor-icon-box-description">
        DocPulse excels in both meeting customer expectations and leading the market in product features by actively listening to customer feedback and rapidly evolving our offerings.
    </p>
</div>

        </div>
    )
};

export default Blogs;