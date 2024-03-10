import React from 'react';
import './App.css';
import SignUpForm from './components/SignUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import ChatList from './components/ChatList';

function App() {
  
  return (<>
  <Routes>
    <Route path='/' element = {<SignUpForm/>}/>
    <Route path='/chat' element = {<ChatRoom/>}/>
    <Route path='/chatList' element = {<ChatList/>}/>
  </Routes>
  </>);
}


export default App;