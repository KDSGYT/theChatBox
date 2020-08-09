
import React from "react";
import { Link } from 'react-router-dom';

import Button from "./misc/Button";
import "./Choose.scss";

function Choose({ render }) {

    return (
        <div className="buttons">
            <Link to={`/create-room`}><Button value={"Create Room"} /></Link>
            <Link to={`/join-room`}><Button value={"Join Room"} /></Link>

        </div>

    );
}

export default Choose;
