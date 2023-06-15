import styled from "styled-components";

export const BtnDefinicoes = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.bgcolor === "4" ? "left" : "center")};
  width: 100%;
  background-color: ${(props) =>
    props.bgcolor === "1"
      ? "var(--color-blue-2)"
      : props.bgcolor === "2"
      ? "var(--color-danger)"
      : props.bgcolor === "3"
      ? "var(--color-green-1)"
      : "var(--color-gray-3)"};
  border-radius: var(--border-btn);
  border: none;
  padding: 1rem;
  font-family: var(--inter);
  font-weight: ${(props) =>
    props.bgcolor === "4" ? "var(--regular)" : "var(--semi-bold)"};
  letter-spacing: ${(props) => (props.bgcolor === "4" ? "0" : "0.25px")};
  color: ${(props) =>
    props.bgcolor === "3"
      ? "var(--color-green-2)"
      : props.bgcolor === "4"
      ? "var(--color-black)"
      : "var(--color-gray-3)"};
  font-size: ${(props) =>
    props.bgcolor === "4" ? "1rem" : "var(--btn-text-size)"};
  // text-transform: capitalize;
  z-index: 1;
  margin-top: ${(props) => (props.marginTop ? "1rem" : "0")};

  svg {
    margin-right: 0.5rem;
  }
`;
