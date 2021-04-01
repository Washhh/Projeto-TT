import styled from 'styled-components';
import { FlexContainer } from '../../../../../styles/GlobalStyled';

export const StyledHistoricContent = styled(FlexContainer)`
  max-width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-x: auto;

  .graphic {
    align-self: center;
    margin-top: 10px;
    width: 70%;
    max-height: 200px;
    min-height: 100px;
  }

  @media (max-width: 1400px) {
    .graphic {
      margin-top: 5px;
      width: 70%;
      min-height: 80px;
      max-height: 100px;
    }
  }

  @media (max-width: 1100px) {
    .graphic {
      width: 60%;
      min-height: 60px;
      max-height: 80px;
    }
  }
  @media (max-width: 650px) {
    .graphic {
      min-width: 80%;
      min-height: 60px;
      max-height: 80px;
    }
  }
`;
export const HistoricBase = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    img {
      vertical-align: middle;
    }
  }
`;
export const Paragraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  padding-left: 1.5em;
  padding-right: 1.5em;
  max-width: 80%;
  position: relative;
  left: 8em;

  @media (max-width: 650px) {
    left: 5em;
  }
`;
