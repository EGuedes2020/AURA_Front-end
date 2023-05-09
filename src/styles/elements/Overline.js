import styled from "styled-components";

export const Overline = styled.span`
  color: ${(props) =>
    props.variant === "Default"
      ? "var( --color-text-card-defaut)"
      : "var(--color-text-card-sugestoes)"};
  font-family: var(--inter);
  font-weight: var(--regular);
  font-size: var(--overlineDefault-text-size);
  text-transform: uppercase;
`;