import React from "react";
import { Grid, Typography, TextField, Button, Link } from "@material-ui/core";

const Toggle = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <form>
          <Typography variant="h4" gutterBottom align="center">
            Sign In
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" label="Email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth variant="outlined" type="password" label="Password" />
            </Grid>
            <Grid item xs={12}>
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
        <Typography variant="body2" align="center">
          or sign in with
        </Typography>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <Button variant="outlined" color="primary" startIcon={<i className="fab fa-google-plus-g"></i>}>
              Google
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" startIcon={<i className="fab fa-facebook-f"></i>}>
              Facebook
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" startIcon={<i className="fab fa-github"></i>}>
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" startIcon={<i className="fab fa-linkedin-in"></i>}>
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Toggle;
