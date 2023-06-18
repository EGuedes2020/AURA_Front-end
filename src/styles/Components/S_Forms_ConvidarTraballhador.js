import styled from "styled-components";

export const FormsConvidarTraballhador = styled.form`
  display: grid;
  gap: var(--main-spacing);

  input {
    border-radius: var(--border-login-input);
    background-color: var(--color-bg-forms-input);
    border: none;
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

  button {
    margin-top: 1rem;
  }
`;
