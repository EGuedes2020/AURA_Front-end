import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  width: 100%;
  padding: 1rem;
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

  div {
    position: relative;

    img {
      cursor: pointer;
      position: absolute;
      height: 1.5rem;
      bottom: 50%;
      transform: translateY(50%);
      right: 1rem;
    }
  }

  a {
    text-align: right;
  }

  span {
    justify-self: end;
    color: var(--color-span-forms-pass);
  }

  input {
    width: 100%;
    border-radius: var(--border-login-input);
    background-color: var(--color-bg-forms-input);
    border: none;
    padding: 1rem;
    padding-right: 3.4rem;
    font-family: var(--inter);
    font-weight: var(--regular);
    color: var(--color-text-forms-input);
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    margin-top: 3rem;
  }
`;
