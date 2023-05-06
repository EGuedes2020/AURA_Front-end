import styled from "styled-components";

export const HeaderNav = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  background: var(--color-bg-blue);
  z-index: 5;

  padding: var(--header-padding);

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: var(--icon-profile-header);
      width: auto;
      border-radius: var(--border-total);
      cursor: pointer;
    }
  }
`;
