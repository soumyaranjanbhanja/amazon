import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Container, TextField, Grid, Button } from "@material-ui/core";
import axios from "axios";



const Signup=()=>{
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

    const logout=()=>{
            window.location.href="/Login";
            localStorage.removeItem("token");
    }


    const handleSubmit=async (e)=>{
                            e.preventDefault();
                            try{
                                 const response=await axios.post("http://localhost:65000/api/users/Signup",formData);
                                 console.log(response.data);
                                 console.log("Signup Successfull");
                                 navigate("/");
                                 if(!response.data){
                                                    throw new Error("Signup Failed");
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
         <div style={{marginLeft:"534px",marginBottom:"-10px"}}><img src="/google.png" width="200px" height="100px" alt="abc" /></div>
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
                               name="email"
                               label="Email Address"
                               value={formData.email}
                               onChange={handleChange}
                               />   
                           </Grid>
                           <Grid item xs={12}>
                           <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="password"
                               name="password"
                               label="Password"
                               value={formData.password}
                               onChange={handleChange}
                               />     
                           </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop:"10px"}}
                    >
                    Signup
                    </Button>
                    <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={logout}
                    style={{marginTop:"13px"}}
                    >
                    Logout
                    </Button>
             </form>
             </div>
        </Container>
        </>
    )
}

export default Signup;