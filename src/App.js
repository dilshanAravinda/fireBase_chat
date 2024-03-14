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
import DBTest from './components/DBTest';
import ShowDataDb from './components/ShowDataDb';

function App() {
  // const {auth, setAuth} = useContext(AuthContext);
  return (<>
  <Routes>
    <Route path='/' element = {<SignUpForm/>}/>
    <Route path='/chat' element = {<ChatRoom/>}/>
    <Route path='/chatList' element = {<ChatList/>}/>
    <Route path='/dbTest' element = {<DBTest/>}/>
    <Route path='/showData' element = {<ShowDataDb/>}/>
  </Routes> 
  </>);
}


export default App;