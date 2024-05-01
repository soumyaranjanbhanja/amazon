import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Container, TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";



const Login=()=>{
    const navigate=useNavigate();
    const formFields={
           email:"",
           password:""
    }

    const [formData,setFormData]=useState(formFields);


    const handleChange=(e)=>{
           const {name,value}=e.target;
           setFormData({...formData,[name]:value});
    }

    const signup=()=>{
             window.location.href="/Signup";
             localStorage.removeItem("token");
    }

    

   

    const handleSubmit=async (e)=>{
                            e.preventDefault();
                            try{
                                 const response=await axios.post("http://localhost:65000/api/users/Login",formData);
                                 if(response.data.token){
                                          axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
                                          localStorage.setItem("token",response.data.token);
                                          console.log(response.data.token);
                                          console.log("Login Successfull");
                                          navigate("/DenseAppBar");
                                 }else{
                                                    throw new Error("Login Failed");
                                 }
                                 setFormData({
                                      email:"",
                                      password:""
                                 })
                            }catch(error){
                                              console.error("error",error);     
                            }
    }
    return(
         <>
         <div style={{marginLeft:"534px",marginBottom:"-10px"}}><img src="imageedit.gif" width="100px" height="100px" alt="abc" /></div>
         <Container component="main" maxWidth="xs" className="container">
            <div>
             <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                           <Grid item xs={12}>
                               <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="email"
                               size="small"
                               name="email"
                               color="secondary"
                               label="Email Address"
                               value={formData.email}
                               onChange={handleChange}
                               style={{marginTop:"-173px",marginLeft:"272px",width:"200px"}}
                               />   
                           </Grid>
                           <Grid item xs={12}>
                           <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="password"
                               color="secondary"
                               size="small"
                               name="password"
                               label="Password"
                               value={formData.password}
                               onChange={handleChange}
                               style={{marginTop:"-210px",marginLeft:"480px",width:"200px"}}
                               />     
                           </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop:"-450px",width:"20px",marginLeft:"680px"}}
                    >
                    Login
                    </Button>
                   <p onClick={signup} style={{marginTop:"-220px",width:"80px",marginLeft:"620px"}}><span style={{marginRight:"6px",color:"primary"}}>create</span>account</p>
             </form>
             </div>
        </Container>
        </>
    )
}

export default Login;