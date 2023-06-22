import styled from "styled-components";

export const SecVerMaisSugestoes = styled.div`
  font-family: var(--inter);
  font-size: var(--font-votes-sugestoes);
  font-weight: var(--bold);
  color: ${(props) =>
    props.status === "pending"
      ? "var(--color-links)"
      : "var(--color-links-veredito)"};
  justify-self: end;
  cursor: pointer;

  width: max-content;
  white-space: nowrap;

  a {
    border-bottom: ${(props) =>
      props.status === "pending"
        ? "2px solid var(--color-links)"
        : "2px solid var(--color-links-veredito)"};
  }

  a:link {
    color: ${(props) =>
      props.status === "pending"
        ? "var(--color-links)"
        : "var(--color-links-veredito)"};
  }

  a:visited {
    color: ${(props) =>
      props.status === "pending"
        ? "var(--color-links)"
        : "var(--color-links-veredito)"};
  }

  a:active {
    color: ${(props) =>
      props.status === "pending"
        ? "var(--color-links)"
        : "var(--color-links-veredito)"};
    //background-color: --color-links;
    //-webkit-tap-highlight-color: transparent;
  }
`;
