import React from "react";
import "./GmailUi.css";
import Login from "./Login";


const GmailUi=()=>{
    const myStyle = {
        backgroundImage:
            "url('https://media1.tenor.com/m/8Y_S-NrX-FMAAAAC/programming.gif')",
        height: "140vh",
        fontSize: "16px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return(
        <>
        <div className="container1">
           <img src="/google.png" height="90px" alt="google"/> 
       </div>
       <div>
           <div className="container2" style={myStyle}>
              <Login/>
           </div>
       </div>
       </>
    )
}

export default GmailUi;