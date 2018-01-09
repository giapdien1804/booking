import socketio from 'socket.io';
import VueSocketIO from './Main';

export const SocketInstance = socketio('http://booking2.com:4113');

window.Vue.use(VueSocketIO, SocketInstance);