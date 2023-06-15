import styled from "styled-components";

export const SecVotosVerMaisSugestoesContainer = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.variant === "veredito" ? "1fr 1fr 1fr" : "1fr 1fr"};

  svg {
    justify-self: center;
  }
`;
