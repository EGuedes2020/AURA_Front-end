import styled from "styled-components";

export const ConquistaInfoSec = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;

  label {
    font-family: var(--readex-pro);
    font-size: 0.875rem;
    font-weight: var(--medium);
    color: var(--color-black);
  }

  p {
    font-family: var(--inter);
    font-size: 1rem;
    font-weight: var(--regular);
    color: var(--color-black);
  }
`;
