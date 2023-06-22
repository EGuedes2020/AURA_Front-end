import styled from "styled-components";

export const BtnUpdateVeredito = styled.button`
  align-items: center;

  background-color: var(--color-danger);
  border-radius: var(--border-btn);
  border: none;
  padding: 1rem;
  font-family: var(--inter);
  font-weight: var(--bold);
  color: var(--color-gray-3);
  font-size: var(--btn-text-size);
  text-transform: uppercase;
  width: 100%;
  // height: min-content;
  bottom: var(--btn-bottom-fixed);
  right: 1rem;
  z-index: 1;

  img {
    margin-right: 0.5rem;
  }
`;
