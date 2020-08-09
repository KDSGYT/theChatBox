import React from 'react'
import './Button.scss'

function Button({ value, render }) {
    return (
        <input type="Submit" onClick={() => render} value={value} readOnly />
    )
}

export default Button