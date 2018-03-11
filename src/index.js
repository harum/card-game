import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const socket = io('http://localhost:8080');
socket.on('connect', () => { console.log('connected')});
socket.on('event', (data) => { console.log('data', data)});
socket.on('disconnect', () => { console.log('disconnected')});

