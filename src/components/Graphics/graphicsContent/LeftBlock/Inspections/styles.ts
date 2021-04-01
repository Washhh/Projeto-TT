import styled from 'styled-components';

export const StyledInspections = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .inspectionSearch {
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .inspectionSearch input {
    color: #999999;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    width: 90%;
    border: solid 1px #ebebeb;
    outline: none;
    border-radius: 5em;
  }

  .inspectionTable {
    max-height: 100%;
    overflow-y: auto;
    flex: auto;
  }

  @media (max-width: 580px) {
    .inspectionSearch {
      flex: 0.4;
    }

    .inspectionSearch input {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  @media (max-width: 470px) {
    .inspectionSearch {
      flex: 0.3;
    }
  }
`;
