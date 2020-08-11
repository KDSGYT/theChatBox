import React, { useRef, useEffect, useState } from 'react';
import Button from './../../misc/Button'
import { Link } from 'react-router-dom'
import './JoinRoom.scss';

function JoinRoom({  socket }) {



    const nameInput = useRef(null);
    const chatRoomNumber = useRef(null);



    const [Values, setValues] = useState({
        name: "",
        chatRoomNumber: null
    })

    function joinRoom(e) {
        e.preventDefault();
        socket.emit('join-room', (some) =>{
            console.log(some)
        })
        // handleSubmit(name, room, setValues, changeConnection)
    }

    function handleChange(){
        setValues({
            name: nameInput.current.value,
            chatRoomNumber: chatRoomNumber.current.value
        })
    }

    useEffect(() =>{
        setValues({
            name: nameInput.current.value,
            chatRoomNumber: chatRoomNumber.current.value
        })
    },[nameInput, chatRoomNumber])


    // useEffect(() => {
    //     if (Values.chatRoomNumber !== null) sendData(Values.name, Values.chatRoomNumber);
    // }, [Values])

    return (
        <section className="JoinRoom">
            <form style={{ animation: " show 1s ease" }} className="JoinRoom-form" onSubmit={joinRoom}>

                <input type="text" onChange={handleChange} placeholder="Name" ref={nameInput} required autoComplete="off"/>

                <input type="text" onChange={handleChange} placeholder="Room Code" ref={chatRoomNumber} required autoComplete="off"/>
                <Link to={`/chat-room?name=${Values.name}`}>
                    <Button type={"submit"} value={"Join"} />

                </Link>
            </form>
        </section>
    );
}
export default JoinRoom;