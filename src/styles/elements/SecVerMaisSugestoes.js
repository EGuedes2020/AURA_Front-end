import styled from "styled-components";

export const SecVerMaisSugestoes = styled.div`
  font-family: var(--inter);
  font-size: var(--font-votes-sugestoes);
  font-weight: var(--bold);
  color: ${(props) =>
    props.variant === "veredito"
      ? "var(--color-links-veredito)"
      : "var(--color-links)"};
  justify-self: end;
  border-bottom: ${(props) =>
    props.variant === "veredito"
      ? "2px solid var(--color-links-veredito)"
      : "2px solid var(--color-links)"};
  cursor: pointer;

  width: max-content;
  white-space: nowrap;

  a:link {
    color: ${(props) =>
      props.variant === "veredito"
        ? "var(--color-links-veredito)"
        : "var(--color-links)"};
  }

  a:visited {
    color: ${(props) =>
      props.variant === "veredito"
        ? "var(--color-links-veredito)"
        : "var(--color-links)"};
  }

  a:active {
    color: ${(props) =>
      props.variant === "veredito"
        ? "var(--color-links-veredito)"
        : "var(--color-links)"};
    //background-color: --color-links;
    //-webkit-tap-highlight-color: transparent;
  }
`;
