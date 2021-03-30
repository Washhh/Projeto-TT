import styled from 'styled-components'

export const StyledTable = styled.table`
    width: 95%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    padding-bottom: 0.5em;
    overflow-y: auto;

    .rows{
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        border-bottom: solid 1px #EBEBEB;
    }

    .rows tr:nth-child(1){
        display: flex;
        justify-content: space-evenly;
    }
    
    .rows tr td:nth-child(1){
        width: 55%;
    }
    
    .rows tr td:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 50%;
    
    }
    .rows tr td:nth-child(2) img{
        vertical-align: bottom;
        width: 8%;
    }
    
    .rows tr:nth-child(2){
        display: flex;
        justify-content: space-between;
    }

    @media (max-width:1600px){
       font-size: 1rem;
    }
`
export const TableContent = styled.div`
    max-height: 400px;
    overflow-y: auto;
`
export const Title = styled.h2`
    font-family:'Poppins', sans-serif;
    font-size: 1rem;
    padding-top: 1em;
    line-height: 0.8;
`
export const SubTitle = styled.h3`
    font-family:'Poppins', sans-serif;
    font-size: 1rem;
    opacity: 0.3;
    padding-top: 0;
`
export const Pending = styled.strong`
    color: #7FC008;
    border: solid 1px #7FC008;
    border-radius: 5em;
    font-family:'Poppins', sans-serif;
    font-size: 0.5rem;
    padding-left: 1.5em;
    padding-right: 1.5em;
`
export const Realized = styled(Pending)`
    font-size: 0.6rem;
`