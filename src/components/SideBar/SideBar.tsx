import React from 'react'
import menu from '../../assets/icons/menu.png'
import {StyledSideBar} from './styles'

export default () =>
    <StyledSideBar className="sideBar">
        <button className="sideBarButton">
            <img src={menu} alt="menu"/>
        </button>
    </StyledSideBar>