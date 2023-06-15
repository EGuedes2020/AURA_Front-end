import styled from "styled-components";

export const InfoBox = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: max-content 1fr;
  background-color: var(--color-card-default);
  border-radius: var(--border-card);
  padding: 1rem;

  p {
    align-self: center;
    color: var(--color-gray-3);
    font-size: var(--font-info-box);
    font-family: var(--inter);
    font-weight: var(--regular);
  }
`;
