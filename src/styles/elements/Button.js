import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.variant === "4"
      ? "var(--color-bg-button-light)"
      : "var(--color-bg-button)"};
  border-radius: var(--border-btn);
  border: none;
  padding: ${(props) => (props.variant === "4" ? "0.75rem 1rem" : "1rem")};
  font-family: var(--inter);
  font-weight: var(--bold);
  color: var(--color-text-button-primary);
  font-size: var(--btn-text-size);
  text-transform: ${(props) =>
    props.variant === "2"
      ? "capitalize"
      : props.variant === "4"
      ? "capitalize"
      : "uppercase"};
  width: ${(props) => (props.variant === "3" ? "100%" : "max-content")};
  // height: min-content;
  position: ${(props) => (props.variant === "2" ? "fixed" : "static")};
  bottom: var(--btn-bottom-fixed);
  right: 1rem;
  z-index: 1;

  img {
    margin-right: 0.5rem;
  }
`;
