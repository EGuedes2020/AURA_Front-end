import styled from "styled-components";

export const PCardSugestoes = styled.p`
  font-family: var(--inter);
  font-size: var(--p-card-sugestoes-size);
  font-weight: var(--regular);
  color: var(--color-text-black);
  line-height: var(--p-card-sugestoes-line-height);

  overflow: hidden;
  height: calc(
    var(--p-card-sugestoes-visible-lines) * var(--p-card-sugestoes-line-height)
  );
  position: relative;

  ::after {
    content: "";

    position: absolute;
    bottom: 0;
    right: 0;
    height: var(--p-card-sugestoes-line-height);
    width: 75%;

    background: linear-gradient(90deg, transparent, white);
  }
`;
