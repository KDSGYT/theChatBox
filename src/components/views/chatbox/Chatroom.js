import React, { useRef } from 'react';
import { messageSent } from '../../Sockets';
import './Chatroom.scss';
function Chatroom({ Values }) {

    // function sendText(){}

    const message = useRef(null)
    function handleMessageSent(e) {
        e.preventDefault()
        // console.log();
        messageSent(message.current.value)
    }
    return (
        <div className="chatroom">
            <div className="chatWindow">
                <div className="chatHeader">
                {/* <h6> Welcome {Values.name || "KDSG"} !! to {Values.chatroomNumber || "Placeholder Number"}</h6> */}
                    Room: {Values.chatroomNumber || "1234"}
                </div>
                <div className="chatDisplay">
                    <div className="received-message"><span>Hi!</span></div>
                    <div className="sent-message"><span>Hello!</span></div>
                </div>
                <form onSubmit={handleMessageSent}>
                    <input id="chat-input" type="text" ref={message}  />
                </form>
            </div>

        </div>
    );
}
export default Chatroom