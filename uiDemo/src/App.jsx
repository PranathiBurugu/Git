import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand>PRANATHI</Navbar.Brand>
          <Nav>
            <Nav.Link href=''>Home</Nav.Link>
            <Nav.Link href=''>About</Nav.Link>
            <Nav.Link href=''>Projects</Nav.Link>
            <Nav.Link href=''>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Box sx={{minwidth}}>
      <card variant='outlined'>
        <CardContent>
          This is my card
          <p>Hi</p>
          <p>Hello</p>
        </CardContent>
      </card>
      </Box>
    </div>
  )
}

export default App
