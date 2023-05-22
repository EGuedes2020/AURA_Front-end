import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: var(--color-modal-background);
  backdrop-filter: blur(2px);
  z-index: 6;
`;
