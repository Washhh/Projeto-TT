import styled from 'styled-components';

export const StyledCard = styled.div`
  max-height: 100%;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.12), 2px 0 15px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px rgb(230, 225, 225);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  margin: 0 1em 0.5em 1em;

  .cardContent {
    max-height: 100%;
    flex: auto;
  }

  @media (max-width: 470px) {
    margin: 0 0.4em 0.5em 0.4em;
  }
`;
export const TitleBox = styled.div`
  max-height: 60px;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    flex: 1;
  }

  div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }

  div:nth-child(2) button {
    flex-grow: 0;
    border: none;
    outline: none;
    background-color: #fff;
    margin-top: 0.4em;
    border-radius: 50%;
    transition: 0.5s linear all;
  }

  div:nth-child(2) button:hover {
    cursor: pointer;
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .selectTitle {
    align-self: flex-start;
    margin-top: 0.5em;
    display: block;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    width: 70%;
    max-width: 70%;
    color: #444;
    line-height: 1;
    margin-right: 0.5em;
    padding: 0.5em 1.4em 0.5em 0.8em;
    border: none;
    outline: none;
    border-radius: 1.5em;
    background-color: #c4c4c4;
  }

  @media (max-width: 680px) {
    div:nth-child(2) button {
      margin-top: 0.2em;
    }
    div:nth-child(2) button > img {
      width: 15px;
    }
  }
`;
export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  padding-top: 1em;
  padding-left: 1.2em;
  line-height: 0.8;
`;
export const SubTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  opacity: 0.3;
  padding-top: 0;
  padding-left: 1.5em;
`;
