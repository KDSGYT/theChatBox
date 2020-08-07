import React, { useEffect, useRef, useState } from 'react';
import { handleSubmit, sendData } from './actions'
import './JoinRoom.scss';

function JoinRoom({ changeConnection, setValues }) {



    let nameInput = useRef(null);
    let chatRoomNumber = useRef(null);

    // const [Values, setValues] = useState({
    //     name: "",
    //     chatRoomNumber: null
    // })

    function joinRoom(e) {
        e.preventDefault();
        handleSubmit(nameInput.current.value, chatRoomNumber.current.value, setValues, changeConnection)
    }

    // useEffect(() => {
    //     if (Values.chatRoomNumber !== null) sendData(Values.name, Values.chatRoomNumber);
    // }, [Values])

    return (
        <section className="JoinRoom">
            <form className="JoinRoom-form" onSubmit={joinRoom }>
                <input type="text" placeholder="Name" ref={nameInput} required />
                <input type="text" placeholder="Room Code" ref={chatRoomNumber} required />
                <input type="Submit" value="Join" readOnly />

            </form>
        </section>
    );
}
export default JoinRoom;