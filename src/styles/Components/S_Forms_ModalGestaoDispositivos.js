import styled from "styled-components";

export const FormsModalGestaoDispositivos = styled.form`
  display: grid;
  gap: var(--main-spacing);

  input {
    border-radius: var(--border-login-input);
    background-color: var(--color-bg-forms-input);
    border: ${(props) => (props.variant === "modal" ? "solid" : "none")};
    padding: 1rem;
    font-family: var(--inter);
    font-weight: var(--regular);
    color: var(--color-text-forms-input);
    font-size: 1rem;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;
