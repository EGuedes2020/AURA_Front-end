import styled from "styled-components";

export const CardDefault = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
  background-color: ${(props) =>
    props.variant === "Sub" ? "transparent" : "var(--color-card-default)"};
  border-radius: ${(props) =>
    props.variant === "Sub" ? "none" : "var(--border-card)"};
  padding: ${(props) => (props.variant === "Sub" ? "0" : "1rem")};
`;
