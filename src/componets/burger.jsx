import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import {NavLink} from "react-router-dom";



export default   ({ menus, props }) => {
    return (
        <Menu>
            <ul>
            {menus.map((menus) => (
                <li>
                        <NavLink as={NavLink} to={menus.links}>
                            <a>{menus.name}</a>
                        </NavLink>
                 </li>
            ))}
                             </ul>
        </Menu>
    );
};