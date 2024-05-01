import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';




export default function Well() {

  const myStyle = {
    backgroundImage:
        "url('https://media1.tenor.com/m/8Y_S-NrX-FMAAAAC/programming.gif')",
    height: "120vh",
    fontSize: "16px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  
  
  const logout=()=>{
         window.location.href="/GmailUi";
         localStorage.removeItem("token");
  }

  const Signup=()=>{
             window.location.href="/Signup";
             localStorage.removeItem("token");
  }

 
                            
  return (
    <>
<div style={myStyle}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{width:"1280px",backgroundColor:"white",paddingBottom:"8px"}}>
        <Toolbar variant="dense">
        
        <img src="/google.png" width="100px" height="60px" alt="abc" onClick={Signup}/>
        </Toolbar>
      </AppBar>
    </Box>
    <div>
    <Card style={{width:"260px",height:"500px",margin:"2px -80px 900px 2px",padding:"-20px 320px 2px"}}>
      <CardMedia
        component="img"
        alt="google"
        height="560px"
        image="/tenor.gif"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div>
  <Card sx={{ minWidth: 275 }} style={{marginTop:"-800px",width:"220px",backgroundColor:"white"}}>
        <img src="/google.png" width="200px" height="260px" style={{marginTop:"20px"}} alt="abc"/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          click here
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div>
  <Card sx={{ minWidth: 275 }} style={{marginTop:"-346px",width:"240px",marginLeft:"240px",backgroundColor:"white"}}>
        <img src="/google.png" width="200px" height="260px" style={{marginTop:"20px"}} alt="abc"/>
         <CardContent>
        <Typography variant="body2" color="text.secondary">
          click here
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div>
  <Card sx={{ minWidth: 275 }} style={{marginTop:"-346px",width:"240px",marginLeft:"510px",backgroundColor:"white"}}>
        <img src="/google.png" width="200px" height="260px" style={{marginTop:"20px"}} alt="abc"/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          click here
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div>
  <Card sx={{ minWidth: 275 }} style={{marginTop:"-346px",width:"240px",marginLeft:"778px",backgroundColor:"white"}}>
        <img src="/google.png" width="200px" height="260px" style={{marginTop:"20px"}} alt="abc"/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          click here
        </Typography>
      </CardContent>
    </Card>
  </div>
    <div>
  <Card sx={{ minWidth: 275 }} style={{marginTop:"-346px",width:"240px",marginLeft:"1040px",backgroundColor:"white"}}>
        <img src="/google.png" width="200px" height="260px" style={{marginTop:"20px"}} alt="abc"/>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          click here
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div> 
  <Button
        type="button"
        fullWidth
        color="primary"
        backgroundColor="default"
        onClick={logout}
        >
        Login Here
       </Button>
  </div>
  </div>
    </>
  );
}