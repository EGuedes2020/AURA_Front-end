import styled from "styled-components";

export const SeasonBadgesStyles = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1.5rem 1rem;
  background-color: #ffffff;
  width: 100%;

  img {
    justify-self: center;
    max-height: 5rem;
    height: 100%;
    aspect-ratio: 4/4;
    object-fit: contain;
  }
`;
