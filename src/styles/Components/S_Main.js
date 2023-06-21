import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr;
  padding: var(--main-spacing);
  padding-bottom: ${(props) =>
    props.variant === "error404" ? "0" : "var(--main-bottom-spacing)"};
  height: ${(props) => (props.variant === "error404" ? "100svh" : "auto")};
`;
