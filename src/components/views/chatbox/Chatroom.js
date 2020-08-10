import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Chatroom.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function Chatroom({ socket}) {

    const query = useQuery();


    const [name, setname] = useState(null)
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

        setname(query.get("name"))

        socket.on('connect', () => {
            console.log("connected:", socket.id)
            // setState({ name, chatroomNumber });
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
            socket.off('messageReceived');
          };
    })
    // useEffect(() => {
    //     console.log(chat)
    // }, [chat])

    return (
        <div className="chatroom">
            <div className="chatWindow">
                <div className="chatHeader">
                    {/* <h6> Welcome {Values.name || "KDSG"} !! to {Values.chatroomNumber || "Placeholder Number"}</h6> */}
                    Welcome { name || "Placeholder"}!
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