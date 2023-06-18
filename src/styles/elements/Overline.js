import styled from "styled-components";

export const Overline = styled.span`
  color: ${(props) =>
    props.variant === "Default"
      ? "var(--color-overline-card-defaut)"
      : props.variant === "Sugestao"
      ? "var(--color-overline-card-sugestao)"
      : props.variant === "badges"
      ? "var(--color-black)"
      : props.variant === "veredito"
      ? "var(--color-overline-card-sugestao)"
      : "var(--color-overline-card-sugestoes)"};
  font-family: var(--inter);
  font-weight: var(--regular);
  font-size: var(--overlineDefault-text-size);
  text-transform: ${(props) =>
    props.textTranform === "Default" ? "uppercase" : "capitalize"};
`;
