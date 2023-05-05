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
    padding:1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a:nth-child(${(props) => props.navselected}) {
    background-color: var(--color-nav-selected);
    border-top: 4px solid var(--color-nav-stroke);
    padding: calc(1.2rem - 0.25rem) 1.2rem 1.2rem 1.2rem;
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

  /* div {
    grid-column: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 1.3rem;
      height: 0.4rem;
      background-color: var(--purple);
      border-radius: 10px;
      transform: ${(props) =>
    props.navselect === "home"
      ? "translateX(-5.1rem);"
      : props.navselect === "ajuda" || props.navselect === "pessoas"
      ? "translateX(0)"
      : props.navselect === "ocorrencia" || props.navselect === "ocorrencias"
      ? "translateX(4.6rem)"
      : props.navselect === "energia"
      ? "translateX(8.6rem)"
      : "translateX(-5.1rem)"};
      opacity: ${(props) => (props.navopacity === 0 ? "0" : "1")};
      transition: ${(props) =>
    props.navslidetransition === false
      ? "transform 0s ease-in-out"
      : "transform 0.1s ease-in-out"},
        opacity 0.5s ease-out;
    }
  } */
`;
