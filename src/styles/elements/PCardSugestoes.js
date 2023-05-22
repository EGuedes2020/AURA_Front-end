import styled from "styled-components";

export const PCardSugestoes = styled.p`
  font-family: var(--inter);
  font-size: var(--p-card-sugestoes-size);
  font-weight: var(--regular);
  color: ${(props) =>
    props.variant === "card"
      ? "var(--color-p-card-sugestoes)"
      : "var(--color-p-card-sugestao)"};
  line-height: var(--p-card-sugestoes-line-height);

  overflow: ${(props) => (props.variant === "card" ? "hidden" : "visible")};
  height: ${(props) =>
    props.variant === "card"
      ? "calc(var(--p-card-sugestoes-visible-lines) * var(--p-card-sugestoes-line-height))"
      : "auto"};
  position: relative;

  ::after {
    content: "" ${(props) => (props.variant === "card" ? '""' : "none")};

    position: absolute;
    bottom: 0;
    right: 0;
    height: var(--p-card-sugestoes-line-height);
    width: 75%;

    background: linear-gradient(90deg, transparent, white);
  }
`;
