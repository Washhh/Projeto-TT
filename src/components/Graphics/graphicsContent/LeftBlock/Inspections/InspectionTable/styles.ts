import styled from 'styled-components';

export const StyledTable = styled.table`
  padding-top: 1em;
  width: 90%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  padding-bottom: 1em;
  overflow-y: auto;

  th {
    font-size: 0.6rem;
  }

  tr {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-bottom: solid 1px #ebebeb;
  }

  thead > tr {
    border: none;
  }

  tr th:nth-child(1) {
    margin-right: auto;
  }

  tr th:nth-child(2) {
    width: 10%;
  }
  tr th:nth-child(3) {
    width: 10%;
  }
  tr th:nth-child(4) {
    width: 20%;
  }

  tr td:nth-child(1) {
    margin-right: auto;
    font-size: 1rem;
  }
  tr td:nth-child(2) {
    width: 10%;
    text-align: center;
  }
  tr td:nth-child(3) {
    width: 10%;
    text-align: center;
  }
  tr td:nth-child(4) {
    width: 20%;
    text-align: center;
  }

  .tableBody {
    overflow: auto;
  }

  @media (max-width: 1400px) {
    tr td {
      font-size: 0.8rem;
    }

    tr td:nth-child(1) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1100px) {
    tr td {
      font-size: 0.8rem;
    }
    tr td:nth-child(1) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 470px) {
    tr th:nth-child(2) {
      width: 15%;
    }
    tr th:nth-child(3) {
      width: 15%;
    }
    tr th:nth-child(4) {
      width: 25%;
    }

    tr td:nth-child(2) {
      width: 15%;
    }
    tr td:nth-child(3) {
      width: 15%;
    }
    tr td:nth-child(4) {
      width: 25%;
    }
  }
`;
export const TableContent = styled.div`
  max-height: 150px;

  @media (max-width: 1100px) {
    max-height: 100px;
  }
`;
