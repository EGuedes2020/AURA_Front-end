import styled from "styled-components";

export const ConquistasHeader = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr 1fr 1fr;

  border-bottom: 2px solid var(--color-gray-3);
  padding: 0 1rem var(--padding-bottom);
  margin-bottom: 1rem;

  span {
    justify-self: center;
    font-family: var(--readex-pro);
    font-size: var(--font-size);
    font-weight: var(--semi-bold);
    line-height: var(--font-size);
    color: var(--color-gray-3);
    position: relative;

    div {
      justify-self: center;
      height: var(--stroke-height);
      width: 2px;
      background-color: var(--color-gray-3);
      margin-left: 50%;
      transform: translate(-50%);
      position: absolute;
      top: calc(var(--font-size) + var(--padding-bottom) - (var(--stroke-height)/2));
    }
  }
`;
