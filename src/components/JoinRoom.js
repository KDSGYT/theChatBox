import React, { useEffect, useRef, useState } from 'react';
import { handleSubmit, sendData } from './actions'
import './JoinRoom.scss';

function JoinRoom() {

    

    let nameInput = useRef(null);
    let chatRoomNumber = useRef(null);

    const [Values, setValues] = useState({
        name: "",
        chatRoomNumber: null
    })

    useEffect(() => {
        if(Values.chatRoomNumber!==null)sendData(Values.name,Values.chatRoomNumber);
    }, [Values])

    return (
        <section className="JoinRoom">
            <form className="JoinRoom-form" onSubmit={(e) => (e.preventDefault(), handleSubmit(nameInput.current.value, chatRoomNumber.current.value, setValues))}>
                <input type="text" placeholder="Name" ref={nameInput} required />
                <input type="text" placeholder="Chat Room Number" ref={chatRoomNumber} required />
                <input type="Submit" value="Join" readOnly />

            </form>
        </section>
    );
}
export default JoinRoom;