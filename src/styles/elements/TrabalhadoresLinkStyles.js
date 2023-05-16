import styled from "styled-components";

export const TrabalhadoresLinkStyles = styled.article`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.75rem;
  background-color: var(--color-bg-trabalhadorLink);
  padding: 0.5rem;
  font-family: var(--inter);
  font-weight: var(--regular);
  color: var(--color-text-trabalhadorLink);
  font-size: var(--font-trabalhadorLink);
  border-bottom: 2px solid var(--color-bg-blue);

  span {
    align-self: center;
  }

  img {
    height: var(--icon-profile-header);
    width: auto;
    border-radius: var(--border-total);
    cursor: pointer;
  }
`;
