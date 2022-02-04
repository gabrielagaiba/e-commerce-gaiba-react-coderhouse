import { NavLink } from "react-router-dom";

const NavBarItem = ({itemNavBar}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={itemNavBar.url}>{itemNavBar.name}</NavLink>
        </li>
        
    )
}

export default NavBarItem;