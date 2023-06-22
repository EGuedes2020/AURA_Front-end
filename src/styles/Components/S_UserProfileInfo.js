import styled from "styled-components";

export const UserProfileInfoStyles = styled.section`
  display: grid;
  //gap: var(--main-spacing);
  grid-template-columns: 1fr;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  img {
    height: var(--profile-pic-size);
    width: var(--profile-pic-size);
    justify-self: center;
    border-radius: 100%;
    margin-bottom: var(--main-spacing);
    object-fit: cover;
  }

  span {
    margin-top: 0.5rem;
    font-family: var(--inter);
    font-weight: var(--bold);
    font-size: var(--font-user-profile-info);
    color: var(--color-span-user-profile-info);
  }
`;
