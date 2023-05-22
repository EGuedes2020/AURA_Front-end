import styled from "styled-components";

export const ModalVereditoSugestao = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  border-radius: var(--border-card);
  padding: var(--main-spacing);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-modal);
  z-index: 7;
`;
