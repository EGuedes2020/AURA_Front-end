import styled from "styled-components";

export const BadgesModalContainer = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  min-width: min-content;
  width: 80%;
  max-width: 30rem;

  border-radius: var(--border-card);
  padding: var(--main-spacing);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-bg-modal);
  z-index: 7;

  div {
    display: grid;
    gap: 1rem;
    grid-template-columns: max-content 1fr;
    width: max-content;
    align-items: center;

    img {
      justify-self: center;
      max-height: 5rem;
      height: 100%;
      aspect-ratio: 4/4;
      object-fit: contain;
      /* filter: ${(props) =>
        props.variant === "instituicao" ? "" : "grayscale(100%)"}; */
    }

    div {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.5rem;

      label {
        font-family: var(--readex-pro);
        font-size: 0.875rem;
        font-weight: var(--medium);
        color: var(--color-black);
      }
    }
  }
`;
