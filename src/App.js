import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./Components/ChatFeed.jsx";
import LoginForm from './Components/LoginForm.jsx';

require('dotenv').config()

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      projectID= {process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed{...chatAppProps}/>}
    />
  )
}

export default App;
