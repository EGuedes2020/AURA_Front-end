import styled from "styled-components";

export const OverlineSugestoes = styled.span`
  color: ${(props) =>
    props.status === "pending"
      ? "var(--color-overline-card-sugestoes)"
      : props.status !== "pending"
      ? "var(--color-overline-card-sugestao)"
      : null};
  font-family: var(--inter);
  font-weight: var(--regular);
  font-size: var(--overlineDefault-text-size);
  text-transform: ${(props) =>
    props.textTranform === "Default" ? "uppercase" : "capitalize"};
`;
