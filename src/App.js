import React, { useState } from 'react';
import './App.css';
import JoinRoom from './components/JoinRoom';
import Chatroom from './components/views/chatbox/Chatroom';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [Values, setValues] = useState({name: null , chatroomNumber: null})
  const child = !isConnected
    ? <JoinRoom
      changeConnection={setIsConnected}
      setValues={setValues}
    />
    : <Chatroom Values={Values}/>

  return (
    <div className="App">
      <header className="App-header">
        {child}
      </header>
    </div>
  );
}

export default App;
