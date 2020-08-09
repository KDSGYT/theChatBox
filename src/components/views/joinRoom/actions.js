import Axios from 'axios';
import { createSocket } from './Sockets';
/**
 * 
 * @param { string } name name entered by the user
 * @param { number } chatRoomNumber chatroom number they want to enter
 * @param { function } setState function to save the values.
 */
export const handleSubmit = (name, chatroomNumber, setState, connection) => {
    console.log("Submitted");
    createSocket(name, chatroomNumber, connection);
    

}

// export const messageSent(data){

// }

// export function dataReceived(data) {
//     return ({
//         type:"received",
//         data
//     })
// }


export const sendData = (name, chatRoomNumber) => {
    Axios.post(`http://localhost:8080/join/${name}`)
        .then(data => console.log(data))



}