import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  //grid-template-rows: max-content 1fr max-content;
  //Padding: var(--header-padding);

  justify-self: center;
  align-self: center;

  img:nth-child(1) {
    justify-self: center !important;
  }
`;

export const LoginForms = styled.form`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr;

  a {
    text-align: right;
  }

  span {
    justify-self: end;
    color: var(--color-span-login-pass);
  }

  input {
    border-radius: var(--border-login-input);
    background-color: var(--color-bg-login-input);
    border: none;
    padding: 1rem;
    font-family: var(--inter);
    font-weight: var(--regular);
    color: var(--color-text-login-input);
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 3rem;
  }
`;
