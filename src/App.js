import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import ChatList from './components/ChatList';
//import { initChat, msgModel, sendMsg } from './db/msg';
// import { getChatsByClient } from './db/quaries';
// import { addUser } from './db/auth';
// import { AuthContext } from './context/Auth';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DBTest from './components/DBTest';
import ShowDataDb from './components/ShowDataDb';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Your App Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/chat">Chat</Nav.Link>
            <Nav.Link as={Link} to="/chatList">Chat List</Nav.Link>
            <Nav.Link as={Link} to="/dbTest">DB Test</Nav.Link>
            <Nav.Link as={Link} to="/showData">Show Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path='/' element={<SignUpForm />} />
        <Route path='/chat' element={<ChatRoom />} />
        <Route path='/chatList' element={<ChatList />} />
        <Route path='/dbTest' element={<DBTest />} />
        <Route path='/showData' element={<ShowDataDb />} />
      </Routes>
    </>
  );
}

export default App;
