import styled from "styled-components";

export const ChartBarStyles = styled.section`
  display: grid;
  //gap: var(--main-spacing);
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 10rem;
  height: 100%;
  justify-self: center;
  align-self: end;
  background-color: var(--color-chartBar);
  border-radius: var(--border-card) var(--border-card) 0 0;
  //padding: var(--main-spacing);
`;
