import styled from "styled-components";

export const FormsCriarSugestao = styled.form`
  display: grid;
  gap: var(--main-spacing);

  a {
    text-align: right;
  }

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

  textarea {
    border-radius: var(--border-login-input);
    background-color: var(--color-bg-forms-input);
    border: none;
    padding: 1rem;
    font-family: var(--inter);
    font-weight: var(--regular);
    color: var(--color-text-forms-input);
    font-size: 1rem;
    width: 100%;
    height: 18rem;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
