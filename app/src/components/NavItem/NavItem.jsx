import React from "react"
import "./navItem.scss"


import HomeIcon from "../../assets/icon-home.svg";
import SupportIcon from "../../assets/icon-support.svg";
import MessagesIcon from "../../assets/icon-messages.svg";
import AccountIcon from "../../assets/icon-account.svg";

function NavItem(props) {
    const icons = {
      home: HomeIcon,
      support: SupportIcon,
      messages: MessagesIcon,
      account: AccountIcon,
    };
  
    // Get the appropriate icon based on props.iconName
    const Icon = icons[props.item];
  
    return (
      <li>
        {Icon && (
          <img 
            src={Icon} 
            alt={props.item} 
            className="hide-mobile" 
          />
        )}
        <a href="#">{props.item}</a>
      </li>
    );
  }
  
  export default NavItem;