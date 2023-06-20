import styled from "styled-components";

export const LeaderBoardHeader = styled.section`
  display: grid;
  //gap: var(--main-spacing);
  grid-template-columns: 1fr 1fr;
  align-self: center;

  span {
    align-self: center;
    font-family: var(--readex-pro);
    font-size: 1rem;
    font-weight: var(--regular);
    color: var(--color-gray-3);
    text-align: right;
  }
`;
