import styled from "styled-components";

export const SecVotosSugestoes = styled.div`
  font-family: var(--inter);
  font-size: var(--font-votes-sugestoes);
  font-weight: var(--bold);
  color: ${(props) =>
    props.status === "pending"
      ? "var(--color-votes-sugestoes)"
      : "var(--color-votes-sugestoes-veredito)"};

  width: min-content;
  white-space: nowrap;
  span {
    font-family: var(--inter);
    font-size: var(--font-votes-span-sugestoes);
    font-weight: var(--regular);
    color: ${(props) =>
      props.status === "pending"
        ? "var(--color-span-card-sugestoes)"
        : "var(--color-span-card-sugestoes-veredito)"};
  }
`;
