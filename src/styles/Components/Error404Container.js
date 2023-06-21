import styled from "styled-components";

export const Error404Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  justify-self: center;

  div {
    width: 100%;
    text-align: center;
    padding-top: 2rem;

    span {
      font-family: var(--readex-pro);
      font-size: var(--font-error-404-title);
      font-weight: var(--regular);
      color: var(--color-green-3);
    }

    p:nth-child(2) {
      font-family: var(--readex-pro);
      font-size: var(--font-error-404-subtitle);
      font-weight: var(--semi-bold);
      color: var(--color-gray-3);
      margin: 1rem 0 0.4rem;
    }

    p:nth-child(3) {
      font-family: var(--readex-pro);
      font-size: var(--font-error-404-text);
      font-weight: var(--regular);
      color: var(--color-gray-2);
    }

    img {
      margin: 3.688rem 0 5rem;
    }
  }

  div:last-child {
    align-self: end;
    padding: 0;
    margin-bottom: 3rem;
  }
`;
