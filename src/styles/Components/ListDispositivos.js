import styled from "styled-components";

export const ListDispositivosContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: var(--border-card);
`;

export const ListDispositivos = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: minmax(auto, 7rem) 1fr 1fr;
  background-color: ${(props) =>
    props.variant === "Header"
      ? "var(--color-bg-DispositivosList-Header)"
      : "var(--color-bg-DispositivosList)"};
  padding: 0.7rem 0.375rem 0.7rem 1rem;
  align-items: center;

  font-family: var(--readex-pro);
  font-size: var(--font-ListDispositivosHeader);
  font-weight: ${(props) =>
    props.variant === "Header" ? "var(--medium)" : "var(--bold)"};
  color: ${(props) =>
    props.variant === "Header"
      ? "var(--color-text-DispositivosList-Header)"
      : "var(--color-text-DispositivosList-divisao)"};

  border-bottom: ${(props) =>
    props.variant === "Header" ? "none" : "2px solid var(--color-bg-blue)"};

  :nth-last-child(1) {
    border-bottom: none;
  }

  span:nth-child(1) {
    p {
      text-align: left;
      padding-top: 0.2rem;

      color: var(--color-text-DispositivosList-piso);
      font-size: var(--font-ListDispositivos-piso);
      font-weight: var(--regular);
      font-family: var(--inter);
      text-transform: capitalize;
    }
  }

  span:nth-child(even) {
    justify-self: center;
    text-align: center;
  }

  span:nth-child(3) {
    justify-self: center;
    text-align: center;
  }

  p {
    justify-self: center;
    text-align: center;
    padding-top: 0.2rem;

    color: var(--color-text-DispositivosList);
    font-weight: var(--bold);
    font-size: var(--font-ListDispositivos);
    font-family: var(--inter);

    span {
      margin-left: 0.2rem;

      color: var(--color-text-DispositivosList-piso);
      font-size: var(--font-ListDispositivos-piso);
      font-weight: var(--regular);
      font-family: var(--inter);
    }
  }
`;
