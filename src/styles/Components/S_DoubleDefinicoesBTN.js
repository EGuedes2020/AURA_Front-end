import styled from "styled-components";

export const DoubleDefinicoesBTN = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: ${(props) => (props.btn === "2" ? "1fr 1fr" : "1fr")};
  margin-bottom: 1.5rem;
`;
