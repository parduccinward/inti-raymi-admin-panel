import React from "react";
import "./Navbar.css";
import { Link} from 'react-router-dom'
import { NavbarData } from './NavbarData';
import * as RiIcons from 'react-icons/ri';
import useLogout from '../hooks/useLogout';

function Navbar(){

    const logout = useLogout();

    const signOut = async () => {
      await logout();
    }

    return(
        <>
        <nav className="nav-menu">
            <ul className="nav-menu-items">
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
              <li className= "logout-text">
                <Link to="/logout" onClick={signOut}>
                <RiIcons.RiLogoutBoxRLine />
                <span>Logout</span>
                </Link>
              </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;