import { render } from 'node-sass'
import React from 'react'
import './Button.scss'

function Button({ value }) {
    return (
        <input type="Submit" value={value} readOnly />
    )
}

export default Button