import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const FlexContainer = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
`

export default createGlobalStyle`
  *{
    margin: 0;
  }
  html{
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
  
  body{
    width: 100%;
    height: 100%;
  }
  
  div#root{
  
    width: 100%;
    height: 100%;
  
  }
  
  @media(max-width:2560px){
      html{
        font-size: 110%;
      }
  }
  
  @media(max-width:2000px){
    html{
      font-size: 90%;
    }
  }
  
  @media(max-width:1600px){
    html{
      font-size: 80%;
    }
  }
  
  
  @media(max-width:1400px){
    html{
      font-size: 62.5%;
    }
  }
  
  @media(max-width:1230px){
    html{
      font-size: 57.5%;
    }
  }
  
  @media(max-width:650px){
    html{
      font-size: 50%;
    }
  }
  
  
  @media(max-width:580px){
    html{
      font-size: 45.5%;
    }
  }
  
  @media(max-width:520px){
    html{
      font-size: 38.5%;
    }
  }
`