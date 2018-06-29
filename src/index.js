/* eslint-disable import/no-extraneous-dependencies */
// import io from 'socket.io-client';
/* eslint-enable import/no-extraneous-dependencies */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// const socket = io('http://localhost:8080');
/* eslint-disable no-console */
// socket.on('connect', () => { console.log('connected'); });
// socket.on('event', (data) => { console.log('data', data); });
// socket.on('disconnect', () => { console.log('disconnected'); });
