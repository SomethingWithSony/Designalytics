import React from "react";
import './button.scss'

function Button (props) {
    return (
        <a href={props.url}>
            {props.item}
        </a>
    )
}

export default Button