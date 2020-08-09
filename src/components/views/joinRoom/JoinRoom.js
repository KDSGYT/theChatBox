import React, {  useRef } from 'react';
import { handleSubmit } from './actions'
import Button from './../../misc/Button'
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
                <Button value={"Join"} />
            </form>
        </section>
    );
}
export default JoinRoom;