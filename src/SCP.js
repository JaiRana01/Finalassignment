import React from 'react';


import Footer from "./Footer.js";
import './scp.css';


const SCP = ({scp}) =>
{
    
    return(
        
       
        <div>
            
              
            <center><h2> SCP List</h2></center>
           
            {
               

               scp.map(
                   (scp) => (
                    <div className ="Container" >
                    <div className="col p-3 m-2 rounded border dropshadow" >

                        <h2>id:{scp.id}</h2>
                        <h3>Item: {scp.Item}</h3>
                        <h4>Description:</h4>
                        <p>{scp.Description}</p> 
                       
                        <p1><img src={scp.Images} alt={scp.Item} class="center" width="400" height="333" /></p1>
                        

                    </div>
                    </div>
                   )
               )
            }
           
               
                <Footer />


        </div>

    )
};

export default SCP;
