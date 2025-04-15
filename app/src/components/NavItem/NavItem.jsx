import React from "react"
import "./NavItem.scss"



function NavItem (props) {
        return (
            <a href={props.url}>
                {props.item}
            </a>
    )
}
export default NavItem;