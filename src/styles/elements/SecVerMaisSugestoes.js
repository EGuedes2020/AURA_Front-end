import styled from "styled-components";

export const SecVerMaisSugestoes = styled.div`
  font-family: var(--inter);
  font-size: var(--font-votes-sugestoes);
  font-weight: var(--bold);
  color: var(--color-links);
  justify-self: end;
  border-bottom: 2px solid var(--color-links);
  cursor: pointer;

  width: max-content;
  white-space: nowrap;

  a:link {
    color: var(--color-links);
  }

  a:visited {
    color: var(--color-links);
  }

  a:active {
    color: var(--color-links);
    //background-color: --color-links;
    //-webkit-tap-highlight-color: transparent;
  }
`;
