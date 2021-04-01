/* eslint-disable no-use-before-define */
import React from 'react';
import menu from '../../assets/icons/menu.png';
import { StyledSideBar } from './styles';

export default function sideBar(): JSX.Element {
  return (
    <StyledSideBar className="sideBar">
      <button type="button" className="sideBarButton">
        <img src={menu} alt="menu" />
      </button>
    </StyledSideBar>
  );
}
