import styled from 'styled-components';

export const StyledSideBar = styled.div`
  align-items: center;
  background: linear-gradient(to bottom, #0db2d6 10%, #4fda91 90%);

  .sideBarButton {
    position: fixed;
    top: 13rem;
    min-width: 65px;
    max-width: 105px;
    height: 4.5em;
    border: none;
    border-radius: 50%;
    margin-left: -0.6em;
    background-color: #fff;
    outline: none;
    transition: 0.4s;
  }

  .sideBarButton:hover {
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    .sideBarButton {
      top: 18rem;
      min-width: 55px;
      max-width: 65px;
      height: 4.2em;
    }
  }

  @media (max-width: 580px) {
    .sideBarButton {
      top: 18rem;
      min-width: 45px;
      max-width: 45px;
      height: 3em;
    }
    .sideBarButton img {
      width: 20px;
    }
  }

  @media (max-width: 470px) {
    .sideBarButton {
      top: 22rem;
      min-width: 45px;
      max-width: 45px;
      height: 3em;
    }
    .sideBarButton img {
      width: 18px;
    }
  }
`;
