import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocket from 'ws';

function App() {

  const socket = new WebSocket('ws://localhost:3000');

  socket.addEventListener('open', function ( event ) {
    console.log('Connected to WS Server')
  });

  socket.addEventListener('message', function (event) {
    console.log('Message from the server', event.data)
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
