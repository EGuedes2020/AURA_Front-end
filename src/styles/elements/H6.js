import styled from "styled-components";

export const H6 = styled.h6`
  font-family: var(--readex-pro);
  font-size: 1.25rem;
  font-weight: var(--semi-bold);
  color: ${(props) =>
    props.variant === "Sugestoes"
      ? "var(--color-black)"
      : "var(--color-gray-3)"};
  line-height: var(--icon-profile-header);
  text-align: ${(props) => (props.variant === "Temporada" ? "center" : "left")};
  margin-bottom: ${(props) => (props.variant === "Dados" ? "0.5rem" : "0")};
`;
