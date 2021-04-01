import styled from 'styled-components';

export const StyledUpdate = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .updateSearch {
    flex: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 1em 0 1em;
    margin-bottom: 0.8em;
  }

  .updateSearch select {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    color: #444;
    padding: 0.5em 0em 0.5em 0.8em;
    width: 100%;
    max-width: 100%;
    border: none;
    outline: none;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border-radius: 1.5em;
    background-color: #c4c4c4;
  }

  .updateSearch input {
    padding: 0.5em 0 0.5em 1.2em;
    color: #999999;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    border: solid 1px #ebebeb;
    outline: none;
    border-radius: 5em;
    margin-bottom: 0.8em;
  }

  .updateTable {
    max-height: 100%;
    flex: 80%;
  }
`;
