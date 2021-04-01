import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 95%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  padding-bottom: 0.5em;
  overflow-y: auto;

  .rows {
    width: 100%;
    display: flex;
    overflow: hidden;
    border-bottom: solid 1px #ebebeb;
  }

  .rows td:nth-child(1) {
    flex: 1.5;
    justify-content: space-evenly;
  }

  .rows td:nth-child(2) {
    flex: 1;
    text-align: center;
  }

  .rows td:nth-child(2) img {
    vertical-align: bottom;
    width: 0.5rem;
  }

  @media (max-width: 1600px) {
    font-size: 1rem;

    .rows td:nth-child(2) img {
      width: 0.7rem;
    }
  }
`;
export const TableContent = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  padding-top: 1em;
  line-height: 0.8;
`;
export const SubTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  opacity: 0.3;
  padding-top: 0;
`;
export const Pending = styled.strong`
  color: #7fc008;
  border: solid 1px #7fc008;
  border-radius: 5em;
  font-family: 'Poppins', sans-serif;
  font-size: 0.5rem;
  padding-left: 1.5em;
  padding-right: 1.5em;
`;
export const Realized = styled(Pending)`
  font-size: 0.6rem;
`;
