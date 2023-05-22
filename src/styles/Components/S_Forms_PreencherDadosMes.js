import styled from "styled-components";

export const FormsPreencherDadosMes = styled.form`
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

    padding-right: ${(props) =>
      props.variant === "PreencherDadosMes" ? "3rem" : ""};

    &:focus {
      outline: none;
    }
  }

  span {
    position: relative;
    span {
      position: absolute;
      top: 47%;
      transform: translateY(-50%);
      right: 1rem;
    }
  }

  button {
    margin-top: 1rem;
  }
`;
