import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DrawerComp from "./DrawerComp";
// import Card from "./Card";


export default function DenseAppBar() {

  return (
    <>
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon/>
            <DrawerComp/>
          </IconButton>
          <IconButton edge="end" color="secondary" style={{marginLeft:"1100px"}}>
            <AccountTreeIcon/> 
          </IconButton>
          <Typography variant="h6" color="secondary" component="div">
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <DrawerComp/>
    </>
  );
}