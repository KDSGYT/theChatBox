import React, { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Choose from './components/Choose'
import CreateRoom from './components/views/createRoom/CreateRoom';
import JoinRoom from "./components/views/joinRoom/JoinRoom";

import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';

const socket = io('http://localhost:8080');

function App() {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [Values, setValues] = useState({ name: null, chatroomNumber: null })
  // <JoinRoom
  //   changeConnection={setIsConnected}
  //   setValues={setValues}

  // />

  return (
    <div className="App">
      <header className="App-header">
        <Router >
          <Switch>
            <Route exact path={`/`}>
              <Choose />
            </Route>
            <Route path="/join-room">
              <JoinRoom />
            </Route>
            <Route path="/create-room">
              <CreateRoom />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>

  );
}

export default App;
