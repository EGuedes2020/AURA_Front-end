import styled from "styled-components";

export const CardSugestoesContainer = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr;

  background-color: ${(props) =>
    props.status === "pending"
      ? "var(--color-card-sugestoes)"
      : "var(--color-card-sugestoes-veredito)"};
  border-radius: var(--border-card);
  padding: var(--main-spacing);
`;
