import styled from 'styled-components';
import { FlexContainer } from '../styles/GlobalStyled'

export const StyledAPP = styled(FlexContainer)`

  background-color:#FFF;

  .sideBar{
    min-width: 50px;
    max-width: 100px;
  }

  @media(max-width:1400px){
    .sideBar{
      min-width: 40px;
      max-width: 80px;
    }
  }

  @media(max-width:580px){
    .sideBar{
      min-width: 30px;
      max-width: 40px;
    }
  }
`