import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Choose from './components/Choose'
import CreateRoom from './components/views/createRoom/CreateRoom';
import JoinRoom from "./components/views/joinRoom/JoinRoom";
import Chatroom from './components/views/chatbox/Chatroom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const socket = io('http://localhost:8080');

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [Values, setValues] = useState({ name: null, chatroomNumber: null })
  // <JoinRoom

  // />


  return (
    <div className="App">
      <header className="App-header">

        <Router >
          <Switch>
          
            {/* <Route exact path={`/`}>
              <Choose
               
                
              />
            </Route> */}

            <Route path="/join-room">
              <JoinRoom
                connected={isConnected}
                changeConnection={setIsConnected}
                socket={socket}

              />
            </Route>
          
            <Route path="/create-room">
              <CreateRoom 
                socket={socket}

              />
            </Route>
          
            <Route path="/" >
              <Chatroom
                socket={socket}
              />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>

  );
}

export default App;
