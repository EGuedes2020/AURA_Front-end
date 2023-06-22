import styled from "styled-components";

export const CharBarContentStyles = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1f;
  grid-template-rows: max-content 1fr max-content;
  //padding: var(--main-spacing);
  //align-self: end;
  //height: calc(15rem * (${(props) => props.percentage} / 100));
  //height: ${(props) => (15 * (props.percentage / 100))}rem;

  p {
    justify-self: center;
    align-self: end;

    font-family: var(--inter);
    font-size: var(--font-chart-euros);
    font-weight: var(--bold);
    color: var(--color-chart-euros);
  }

  span {
    justify-self: center;
    align-self: start;

    font-family: var(--inter);
    font-size: var(--font-chart-mes);
    font-weight: var(--regular);
    color: var(--color-chart-mes);
  }
`;
