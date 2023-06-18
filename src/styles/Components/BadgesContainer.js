import styled from "styled-components";

export const BadgesContainer = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr;

  background-color: var(--color-card-default);
  border-radius: var(--border-card);
  overflow: hidden;
`;
