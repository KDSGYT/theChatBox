import React from 'react'
import './Button.scss'

function Button({ value, type="button" }) {
    return (
        <input type={type}  className="button-misc"value={value} readOnly />
    )
}

export default Button