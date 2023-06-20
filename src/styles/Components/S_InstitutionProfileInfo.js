import styled from "styled-components";

export const InstitutionProfileInfoStyles = styled.section`
  display: grid;
  //gap: var(--main-spacing);
  grid-template-columns: 1fr;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  span:nth-child(1) {
    margin-bottom: 1rem;
  }

  div {
    justify-self: center;
    //align-self: center;
    position: relative;
  }

  svg {
    opacity: 0.2;
  }

  svg:nth-child(1) {
    height: 7.4rem;
    width: auto;
    position: absolute;
    bottom: calc(var(--main-spacing));
    left: 5px;
    transform: translateX(-50%);
    z-index: -1;
  }

  svg:nth-child(2) {
    height: 7.4rem;
    width: auto;
    position: absolute;
    bottom: calc(var(--main-spacing));
    right: 5px;
    transform: translateX(50%);
    z-index: -1;
  }

  img {
    height: auto;
    max-height: var(--profile-pic-size);
    border-radius: 100%;
    margin-bottom: var(--main-spacing);
    border: 2px solid var(--color-bg-blue);
  }

  span {
    margin-top: 0.5rem;
    font-family: var(--inter);
    font-weight: var(--bold);
    font-size: var(--font-user-profile-info);
    color: var(--color-span-user-profile-info);
  }
`;
