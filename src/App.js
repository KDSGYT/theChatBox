import React, { useState } from 'react';
import './App.css';
import JoinRoom from './components/JoinRoom';
import Chatroom from './components/views/chatbox/Chatroom';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [Values, setValues] = useState({ name: null, chatroomNumber: null })
  const child = !isConnected
    ? <JoinRoom
      changeConnection={setIsConnected}
      setValues={setValues}
      
    />
    : <Chatroom
        socket={socket}
        Values={Values}
        changeConnection={setIsConnected}

    />

  return (
    <div className="App">
      <header className="App-header">
        {child}
      </header>
    </div>
  );
}

export default App;
