import styled from "styled-components";

export const SearchBarContainer = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-btn);
  display: grid;
  
  
  button {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: var(--transparent);
    border: none;
    padding: 0.5rem 1rem;
    font-family: var(--lexend);
    font-weight: var(--medium);
    color: var(--card-button-ajudar-color);
    font-size: var(--card-button-ajudar);
    // width: fit-content;
  }
`;
