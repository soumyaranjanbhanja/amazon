import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Signup from "./Signup";
import DenseAppBar from './DenseAppBar';

export default function Hello() {
  return (
    <React.Fragment>
      <DenseAppBar/>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
      <Signup/>
    </React.Fragment>
  );
}