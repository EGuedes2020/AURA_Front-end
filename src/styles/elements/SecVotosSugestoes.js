import styled from "styled-components";

export const SecVotosSugestoes = styled.div`
  font-family: var(--inter);
  font-size: var(--font-votes-sugestoes);
  font-weight: var(--bold);
  color: ${(props) =>
    props.variant === "veredito"
      ? "var(--color-votes-sugestoes-veredito)"
      : "var(--color-votes-sugestoes)"};

  width: min-content;
  white-space: nowrap;
  span {
    font-family: var(--inter);
    font-size: var(--font-votes-span-sugestoes);
    font-weight: var(--regular);
    color: ${(props) =>
      props.variant === "veredito"
        ? "var(--color-span-card-sugestoes-veredito)"
        : "var(--color-span-card-sugestoes)"};
  }
`;
