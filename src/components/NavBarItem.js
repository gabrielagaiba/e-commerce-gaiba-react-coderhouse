import { NavLink } from "react-router-dom";

const logText = () => {
    console.log("Clickeaste el item");
}

const NavBarItem = ({itemNavBar}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={itemNavBar.url} onClick={logText}>{itemNavBar.name}</NavLink>
        </li>
        
    )
}

export default NavBarItem;