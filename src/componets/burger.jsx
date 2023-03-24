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



class ParentComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }


    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }


    closeMenu () {
        this.setState({menuOpen: false})
    }


    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render () {
        return (
            <div>
                <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <OlStyle>
                        {this.props.items.map((menus) => (
                            <LiStyle key={menus.id}>
                                <NavLink as={NavLink} to={menus.links}>
                                    <p onClick={() => this.closeMenu()}>{menus.name}</p>
                                </NavLink>
                            </LiStyle>
                        ))}
                    </OlStyle>

                </Menu>

            </div>
        )
    }
}
export default ParentComponent;


