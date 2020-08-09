import io from 'socket.io-client';
// import socket from 'socket.io-client/lib/socket';
// import { messageSent } from './actions';



export function createSocket(name, chatroomNumber, connection) {

    connection(true);  
//     const socket = io('http://localhost:8080');

//     socket.on('connect', () => {
//         console.log("connected:", socket.id)
//         // setState({ name, chatroomNumber });
//         connection(true);
//     socket.disconnect();

//     });
}
//     socket.on('disconnect', () => {
//         // connection(false) un commenting this will create an error
//         console.log("disconnected", socket.id);
//     })
//     socket.on('messageReceived', (data) => {
//         console.log(data);
//     })

// }
// export function messageSent(data) {
//     socket.emit('messageSent', data);
// }