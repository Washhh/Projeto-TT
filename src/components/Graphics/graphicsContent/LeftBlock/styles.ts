import styled from 'styled-components'

export const StyledLeftBlock = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 0.9fr 1.1fr;
    grid-template-areas: 
    "historic"
    "graficosGerais"
    "inspecoesAgendadas";

    .historic{
        max-height: 100%;
        grid-area: historic;
    }

    .boxStatus{
        grid-area: graficosGerais;
        display: flex;
        justify-content: space-between;
    }
    .boxStatus div:nth-child(1){
        flex: 1;
    }
    .boxStatus div:nth-child(2){
        flex: 1;
    }

    .inspecoesAgendadas{
        height: 100%;
        grid-area: inspecoesAgendadas;
    
    }
`