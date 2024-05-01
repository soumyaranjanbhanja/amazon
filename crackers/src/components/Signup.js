import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, Container, Grid } from "@material-ui/core";
import axios from "axios";



const Signup = () => {
  const navigate = useNavigate();
  const formFields={
               email:"",
               password:""
  }
  const [formData, setFormData] = useState(formFields);

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href="/Login";
    toast.success('Redirecting to Login Page!', {
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:60000/api/users/Signup", formData);
      console.log(response.data);
      console.log("Signup Successful");
      localStorage.setItem("Login",true);
      toast.success('Successfully SignedUp!', {
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
      navigate("/Login");
      if (!response.data) {
        toast.error('Signup Failed!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
          throw new Error("Signup Failed");
      }
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error("error", error);
      toast.error('Signup Failed!', {
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



  return (
    <>
    <div style={{marginLeft:"534px",marginBottom:"-10px"}}><img src="/google.png" width="200px" height="100px" alt="abc" /></div>
    <Container component="main" maxWidth="xs" className="container">
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
          >
            Sign Up
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        </form>
      </div>
    </Container>
    </>
  );
};

export default Signup;
