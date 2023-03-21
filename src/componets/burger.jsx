import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import '../Sidebar.css';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const LiStyle = styled.li`
  padding: 0.5em;
  text-align: left;
`;
const OlStyle = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;


export default ({menus}) => {
    return (
        <Menu>
            <OlStyle>
                {menus.map((menus) => (
                    <LiStyle key={menus.id}>
                        <NavLink as={NavLink} to={menus.links}>
                            <a>{menus.name}</a>
                        </NavLink>
                    </LiStyle>
                ))}
            </OlStyle>
        </Menu>
    );
};