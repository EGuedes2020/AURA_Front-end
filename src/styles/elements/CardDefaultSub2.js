import styled from "styled-components";

export const CardDefaultSub2 = styled.article`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-card-default);
  border-radius: var(--border-card);
  padding: 1rem;

  button {
    justify-self: end;
  }

  a {
    justify-self: end;
  }
`;
