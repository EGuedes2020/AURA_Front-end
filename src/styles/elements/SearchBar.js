import styled from "styled-components";

export const SearchBarStyles = styled.input`
  background-color: var(--color-bg-SearchBar);
  border: none;
  padding: 1rem 1rem 1rem 3rem;
  font-family: var(--inter);
  font-weight: var(--regular);
  color: var(--color-text-SearchBar);
  font-size: var(--font-SearchBar);
  width: 100%;

  &:focus {
    outline: none;
  }
`;
