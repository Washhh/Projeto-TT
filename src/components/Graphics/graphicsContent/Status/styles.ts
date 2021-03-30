import styled from 'styled-components'

export const StyledStatus = styled.div`
    min-height: 100px;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .middle{
        flex:3;
        width: 99%;
        max-width: 100%;
        height: 90px;
        max-height: 100px;
        padding-bottom: 1em;
    }

    @media(max-width:2600px){
        .middle{
            margin-top: 20px;
            height: 200px;
            max-height: 170px;
        }
    }

    @media(max-width:1600px){
        .middle{
            height: 140px;
            max-height: 150px;
            padding-bottom: 1em;
        }
    }

    @media(max-width:1400px){
        .middle{
            height: 80px;
            max-height: 90px;
            padding-bottom: 1em;
        }
    }

    @media(max-width:580px){
        .middle{
            height: 70px;
            max-height: 80px;
            padding-bottom: 1em;
        }
    }
`
export const BaseStatus = styled.div`
    flex: 2;
    min-height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    h3{
        font-family:'Poppins', sans-serif;
        font-size: 1rem;
        padding-top: 0;
        padding-left: 1em
    }

    img{
        width: 8px;
        height: 7px;
    }

    .rightBase{
        display: flex;
        justify-content: flex-start;
    
    }

    .rightBase div:nth-child(1){
        flex: 1.7;
    
    }
    .rightBase div:nth-child(2){
        flex: 1;
    }

    .titleData{
        font-family:'Poppins', sans-serif;
        font-size: 0.7rem;
        opacity: 0.7;
        margin: 0;
        padding-top: 0;
        padding-left: 1.5em
    }

    @media(max-width:2600px){
        justify-content: flex-end;
        align-items: center;    
    } 

    @media(max-width: 440px){
        div:nth-child(2){
            p{
             padding:0;
            } 
         }

        .rightBase div:nth-child(1){
            flex: 2 !important;
        }
    }
    
    
`
export const Paragraph = styled.p`
    font-family:'Poppins', sans-serif;
    font-size: 0.8rem;
    padding-left: 1.5em;
    padding-right: 1.5em;


`