import styled from "styled-components";

export const BtnVeredito = styled.button`
  align-items: center;

  background-color: var(--color-bg-btn-veredito);
  border-radius: var(--border-btn);
  border: none;
  padding: 0.5rem;

  font-family: var(--inter);
  font-weight: var(--semi-bold);
  color: ${(props) =>
    props.variant === "submit"
      ? "var(--color-text-btn-veredito-submit)"
      : "var(--color-text-btn-veredito)"};
  font-size: var(--font-btn-modal);
  z-index: 1;
`;
