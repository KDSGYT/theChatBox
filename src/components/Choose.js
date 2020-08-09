import React from 'react';
import CreateRoom from './views/createRoom/CreateRoom';
import JoinRoom from './views/joinRoom/JoinRoom';

import Button from './misc/Button'

function Choose() {
    return (
        <React.Fragment>
            <Button value={"Create Room"} />
            <Button Value={"Join Room"} />
        </React.Fragment>
    )
}

export default Choose;