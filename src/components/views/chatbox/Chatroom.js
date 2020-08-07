import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

import './Chatroom.scss';
function Chatroom({ Values, changeConnection ,socket}) {

    // function sendText(){}

    const message = useRef(null)
    function handleMessageSent(e) {
        e.preventDefault()
        messageSent(message.current.value)
        message.current.value = ""
    }

    const [chat, setchat] = useState([
        {
            type: "received",
            data: "hi"
        },
        {
            type: "sent",
            data: "hello"
        }
    ])

    function dataReceived(data) {
        setchat(prevChat =>
            [
                ...prevChat,
                {
                    type: "received",
                    data
                }
            ])
    }
    
    function messageSent(data) {
        socket.emit('messageSent', data);
        setchat(prevChat =>
            [
                ...prevChat,
                {
                    type: "sent",
                    data
                }
            ])
    }

    useEffect(() => {
       


        socket.on('connect', () => {
            console.log("connected:", socket.id)
            // setState({ name, chatroomNumber });
            changeConnection(true);
        });


        socket.on('disconnect', () => {
            // connection(false) un commenting this will create an error
            console.log("disconnected", socket.id);
        })
        socket.on('messageReceived', (data) => {
            console.log(data);
            dataReceived(data);
        })
        
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('message');
          };
    })
    useEffect(() => {
        console.log(chat)
    }, [chat])

    return (
        <div className="chatroom">
            <div className="chatWindow">
                <div className="chatHeader">
                    {/* <h6> Welcome {Values.name || "KDSG"} !! to {Values.chatroomNumber || "Placeholder Number"}</h6> */}
                    Room: {Values.chatroomNumber || "1234"}
                </div>
                <div className="chatDisplay">
                    {chat.map((msg, index) => {
                        return msg.type !== "sent" ?
                            <div key={index} className="received-message"><span>{msg.data}</span></div>
                            : <div  key={index} className="sent-message"><span>{msg.data}</span></div>
                    })
                    }
                </div>
                <form onSubmit={handleMessageSent}>
                    <input id="chat-input" type="text" ref={message} />
                </form>
            </div>

        </div>
    );
}
export default Chatroom;