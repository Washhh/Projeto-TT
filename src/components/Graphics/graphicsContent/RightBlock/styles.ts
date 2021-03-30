import styled from 'styled-components'

export const StyledRightBlock = styled.div`
    width: 100%; 
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.1fr 2.7fr;
    grid-template-areas: 
    "status"
    "update";

    .status{
        max-height: 100%;
        grid-area: status;
    }

    .update{
        max-height: 100%;
        grid-area: update;
        display: flex;
    }
`