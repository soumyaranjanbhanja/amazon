import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Button, TextField, Container, Box } from "@mui/material";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const navigate = useNavigate();
  const formFields={
              email:"",
              password:""
         }
  const [formData, setFormData] = useState(formFields);


  const signup=()=>{
                 sessionStorage.removeItem("token");
                 window.location.href="/" 
                 toast.success('Redirecting to SignupPage!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  transition: Bounce,
                  });   
  }

  const handleChange = (e) => {
    const { name,value }=e.target
    setFormData({ ...formData,[name]:value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:60000/api/users/Login", formData);
      if (response.data.token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        sessionStorage.setItem("token", response.data.token);
        console.log("Login Successful");
        console.log(response.data.token);
        console.log("Signup Successful");
        toast.success('Successfully LoggedIn!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/");
      } else {
        toast.error('Login Failed!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
          throw new Error("Login Failed");
      }
      setFormData({ email: "", password: "" });
      } catch (error) {
           console.error("Error", error);
           toast.error('Login Failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
      }
  };

  const ForgotPassword=()=>{
                  navigate("/ForgotPassword");
  }

  return (
    <>
    <div style={{marginLeft:"534px",marginBottom:"-50px"}}><img src="/google.png" width="200px" height="100px" alt="abc" /></div>
    <Container component="main" maxWidth="xs" className="Login-container">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <form className="form" onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Login
          </Button>
          <p
            type="submit"
            // fullWidth
            color=""
            variant="contained"
            sx={{ mt: 3 }}
            onClick={signup}
            href="/"
            style={{color:"blue",fontFamily:"sans-serif",fontSize:"14px",marginLeft:"120px"}}
          > 
            create an account
          </p>
        </form>
        <p onClick={ForgotPassword}>Forgot Password</p>
        <GoogleAuth/>
      </Box>
    </Container>
    </>
  );
};

export default Login;
