import styled from "styled-components";

export const CardSugestoesContainer = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr;

  background-color: ${(props) =>
    props.variant === "veredito"
      ? "var(--color-card-sugestoes-veredito)"
      : "var(--color-card-sugestoes)"};
  border-radius: var(--border-card);
  padding: var(--main-spacing);
`;
