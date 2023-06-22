import styled from "styled-components";

export const PCardSugestoes = styled.p`
  font-family: var(--inter);
  font-size: var(--p-card-sugestoes-size);
  font-weight: var(--regular);
  color: ${(props) =>
    props.status === "pending"
      ? "var(--color-p-card-sugestoes)"
      : props.status === "veredito"
      ? "var(--color-p-card-sugestoes-veredito)"
      : "var(--color-p-card-sugestao)"};
  line-height: var(--p-card-sugestoes-line-height);

  overflow: ${(props) => (props.type === "card" ? "hidden" : "visible")};
  height: ${(props) =>
    props.type === "card"
      ? "calc(var(--p-card-sugestoes-visible-lines) * var(--p-card-sugestoes-line-height))"
      : "auto"};
  position: relative;

  ::after {
    content: "" ${(props) => (props.type === "card" ? '""' : "none")};

    position: absolute;
    bottom: 0;
    right: 0;
    height: var(--p-card-sugestoes-line-height);
    width: 75%;

    background: ${(props) =>
      props.status === "pending"
        ? "linear-gradient(90deg, transparent, white)"
        : "linear-gradient(90deg, transparent, var(--color-blue-2))"};
  }
`;
