import { FlexContainer } from '../../styles/GlobalStyled'
import styled from 'styled-components'

export const StyledGraphicsContent = styled(FlexContainer)`
    background-color: #FFF;
    overflow: auto;

    .rightBlock{
        min-width: 300px;
        flex:1;
    }

    .leftBlock{
        min-width: 700px;
        flex:2;
    }
    
    @media(max-width: 1100px){
        
        flex-direction: column;
        justify-content: space-between;
        
        .rightBlock{
            min-width: 300px;
            flex:1;
    
        }
        .leftBlock{
            min-width: 300px;
            flex:1;
        }
    }
    
`