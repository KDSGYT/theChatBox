import React, { useRef, useState, useEffect } from 'react';
import Button from '../../misc/Button';
import './CreateRoom.scss';
function CreateRoom({socket}) {

    const textfield = useRef(" ");
    const [username, setUsername] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        socket.emit('create-room',() => {
            console.log('created-room');
        })
    }
    useEffect(() => {
        setUsername(textfield.current.value);
    }, [textfield.current.value])


    return (
        <section className="create">
            <form className="create-room" onSubmit={handleSubmit}>
                <input type="text" className="room-name" ref={textfield} placeholder="Enter Your Username" />
                <Button type={"submit"} value={"Create Room"} />
            </form>
        </section>
    );

}

export default CreateRoom;