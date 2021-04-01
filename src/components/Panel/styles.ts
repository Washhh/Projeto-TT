import styled from 'styled-components';

export const StyledPanel = styled.div`
  display: flex;
  border-right: solid 1px rgb(170, 165, 165);
  justify-content: flex-end;

  div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    transition: 0.1s linear all;
  }

  div:nth-child(1) img {
    flex-grow: 1;
    margin: 0;
    color: #0794b2;
    position: relative;
    padding-left: 1.3rem;
    top: 10rem;
    height: 2rem;
    width: 2rem;
  }

  div:nth-child(1) p {
    flex-grow: 4;
    font-family: 'Poppins', sans-serif;
    color: #0794b2;
    position: relative;
    font-size: 1.3rem;
    top: 10rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 1600px) {
    div:nth-child(1) img {
      top: 11rem;
      height: 2.5rem;
      width: 2.5rem;
    }

    div:nth-child(1) p {
      top: 11rem;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 1400px) {
    div:nth-child(1) img {
      top: 15rem;
      height: 3rem;
      width: 3rem;
    }

    div:nth-child(1) p {
      top: 15rem;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 1250px) {
    display: none;
    visibility: hidden;
    max-width: 50px;

    div:nth-child(1) {
      align-self: flex-start;
      flex-wrap: wrap;
    }

    div:nth-child(1) img {
      padding-left: 1.4em;
      top: 10em;
      width: 30px;
    }

    div:nth-child(1) p {
      padding-left: 1em;
      top: 6em;
      writing-mode: vertical-lr;
      text-orientation: upright;
      text-transform: uppercase;
      letter-spacing: -5px;
    }
  }

  @media (max-width: 650px) {
    div:nth-child(1) img {
      top: 11em;
    }

    div:nth-child(1) p {
      top: 6.5em;
    }
  }

  @media (max-width: 580px) {
    max-width: 30px;

    div:nth-child(1) img {
      width: 20px;
      top: 14em;
    }

    div:nth-child(1) p {
      top: 8em;
    }
  }

  @media (max-width: 470px) {
    max-width: 30px;

    div:nth-child(1) img {
      width: 10px;
      top: 17em;
    }

    div:nth-child(1) p {
      top: 10em;
    }
  }
`;
export const StyledPanelbutton = styled.button`
  align-self: flex-start;
  position: relative;
  top: 7em;
  left: 1em;
  min-width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: #0794b2;
  outline: none;

  :hover {
    cursor: pointer;
  }

  img {
    width: 10px;
    height: 15px;
    border: none;
    outline: none;
  }
`;
export const HiddenButton = styled(StyledPanelbutton)`
  display: none;
  cursor: pointer;
  align-items: center;
  left: -0.6em;
  min-width: 16px;
  max-height: 17px;

  img {
    width: 0.5rem;
    height: 1rem;
  }

  @media (max-width: 1250px) {
    display: inline-block;
  }

  @media (max-width: 580px) {
    img {
      width: 0.8rem;
      height: 1.3rem;
    }
  }
  @media (max-width: 470px) {
    img {
      width: 0.8rem;
      height: 1.5rem;
    }
  }
`;
export const MinimizeButton = styled(StyledPanelbutton)`
  @media (max-width: 1600px) {
    min-width: 16px;
    height: 17px;
    left: 0.7em;

    img {
      width: 0.5rem;
      height: 1rem;
    }
  }

  @media (max-width: 580px) {
    img {
      vertical-align: middle;
      width: 0.8rem;
      height: 1rem;
      padding-bottom: 0.2em;
      padding-right: 0.1em;
    }
  }

  @media (max-width: 470px) {
    img {
      width: 1rem;
      height: 1.5rem;
      padding-bottom: 0.2em;
      padding-right: 0.3em;
    }
  }
`;
export const MaximizeButton = styled(MinimizeButton)`
  left: 1em;

  @media (max-width: 1400px) {
    left: 0.6em;
  }
`;
