import styled from "styled-components";

export const SecVotosVerMaisSugestoesContainer = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.status === "pending" ? "1fr 1fr" : "1fr 1fr 1fr"};
    align-items: center;

  svg {
    justify-self: center;
  }
`;
