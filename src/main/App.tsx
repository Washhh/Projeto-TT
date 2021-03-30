import React from 'react';
import SideBar from '../components/SideBar/SideBar'
import Content from '../components/Content/Content';
import { ContextProvider } from '../components/Context/Context'
import GlobalStyled from '../styles/GlobalStyled'
import { StyledAPP } from './styles'

function App() {
  return (
    <>
      <GlobalStyled />
      <ContextProvider>
        <StyledAPP>
          <SideBar />
          <Content />
        </StyledAPP>
      </ContextProvider>
    </>
  );
}

export default App;
