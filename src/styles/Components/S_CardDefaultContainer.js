import styled from "styled-components";

export const CardDefaultContainer = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: ${(props) =>
    props.variant === "1" ? "1fr" : "1fr 1fr"};
  margin-top: ${(props) => (props.spacing === "sugestoes" ? "4rem" : "0")};
`;
