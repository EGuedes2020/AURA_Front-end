import styled from "styled-components";

export const BtnModal = styled.button`
  align-items: center;
  justify-self: end;

  background-color: var(--color-bg-btn-veredito);
  border-radius: var(--border-btn);
  border: none;
  padding: 0.5rem;

  font-family: var(--inter);
  font-weight: var(--semi-bold);
  color: ${(props) =>
    props.variant === "submit"
      ? "var(--color-text-btn-modal-confirm)"
      : "var(--color-text-btn-modal-close)"};
  font-size: var(--font-btn-modal);
  z-index: 1;
`;
