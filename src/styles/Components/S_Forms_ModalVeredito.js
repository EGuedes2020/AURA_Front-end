import styled from "styled-components";

export const FormsModalVeredito = styled.form`
  display: grid;
  gap: var(--main-spacing);
`;

export const DivRadioBox = styled.div`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr 1fr;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: var(--readex-pro);
    font-weight: var(--regular);
    color: var(--color-text-veredito-checkbox);
    font-size: var(--font-checkbox-text);

    div {
      pointer-events: none;
      position: absolute;

      span {
        margin-top: 1rem;
      }
    }

    input[type="radio"] {
      appearance: none;
      -webkit-appearance: none;

      justify-self: center;
      width: calc(50vw - 3rem - 1.5rem);
      max-width: 12rem;
      min-height: 7rem;
      aspect-ratio: 2 / 1.5;
      background-color: var(--color-veredito-checkbox);
      border-radius: var(--border-btn);
    }

    input[type="radio"]:checked {
      background-color: var(--color-veredito-checked-checkbox);
      color: var(--color-text-veredito-checked-checkbox);
    }
  }
`;

export const SpanBtnModal = styled.span`
  justify-self: end;
`;

export const SpanVeredito = styled.span`
  color: ${(props) =>
    props.variant === "checked"
      ? "var(--color-text-veredito-checked-checkbox)"
      : "var(--color-text-veredito-checkbox);"};
`;
