import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  //column-gap: 2.7rem;
  grid-template-columns: ${(props) =>
    props.LoginRole === 1 ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"};

  background-color: var(--color-nav);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 var(--main-spacing);
  z-index: 2;

  a {
    padding: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:nth-child(${(props) => props.navselected}) {
    background-color: var(--color-nav-selected);
    border-top: var(--nav-top-border) solid var(--color-nav-stroke);
    padding: calc(1.2rem - var(--nav-top-border)) 1.2rem 1.2rem 1.2rem;
  }

  a:active {
    background-color: none;
    -webkit-tap-highlight-color: transparent;
  }

  a:hover {
  }

  span {
    svg {
      width: auto;
      cursor: pointer;
    }
  }
`;
