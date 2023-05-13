import styled from "styled-components";

export const LoginPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  min-height: 100dvh;
  width: 100%;
  background: var(--color-bg-blue);
  //Padding: var(--header-padding);

  img:nth-child(1) {
    justify-self: end;
  }

  /* img:nth-last-child(1) {
    position: sticky;
    bottom:0;
  } */
`;
