import styled from 'styled-components';
import { FlexContainer } from '../../styles/GlobalStyled';

export const StyledContent = styled(FlexContainer)`
  .controlPanel {
    max-width: 400px;
  }

  .contentGraphic {
    flex: auto;
    display: flex;
    flex-direction: column;
  }

  .title {
    display: flex;
    min-height: 10%;
    align-items: center;
  }
  .title h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    padding-left: 1em;
  }

  .graphics {
    width: 100%;
    flex: 1;
  }
`;
