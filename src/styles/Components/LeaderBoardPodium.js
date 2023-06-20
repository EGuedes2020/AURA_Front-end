import styled from "styled-components";

export const LeaderBoardPodium = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: max-content;

  div {
    display: grid;
    //gap: var(--main-spacing);
    grid-template-columns: 1fr;
    justify-self: center;
    height: max-content;

    span {
      svg {
        margin-bottom: 1.2rem;
        height: 2rem;
        justify-self: center;
      }
    }

    span:nth-child(3) {
      margin-top: 1rem;
      font-family: var(--inter);
      font-weight: var(--bold);
      font-size: var(--font-leaderboard-score);
    }

    span:nth-child(4) {
      margin-top: 0.5rem;
      font-family: var(--readex-pro);
      font-weight: var(--medium);
      font-size: var(--font-leaderboard-institution);
    }

    div {
      justify-self: center;
      position: relative;

      svg {
        opacity: 0.2;
        bottom: 0;
        width: auto;
        position: absolute;
        height: calc(
          7.5rem - (var(--profile-pic-size) - (${(props) => props.imgSize}px))
        );
        z-index: -1;
      }

      svg:nth-child(1) {
        left: 5px;
        transform: translateX(-50%);
      }

      svg:nth-child(2) {
        right: 5px;
        transform: translateX(50%);
      }

      svg:nth-child(3) {
        z-index: 1;
        opacity: 1;
        bottom: 2rem;
        left: 0.7rem;
        transform: scale(1.7);

        path:nth-child(3) {
          opacity: 0.6;
        }

        path:nth-child(2) {
          opacity: 0.8;
        }
      }

      img {
        height: auto;
        max-height: var(--profile-pic-size);
        border-radius: 100%;
        border: 2px solid var(--color-bg-blue);
        //object-fit: contain;
        margin-top: 0;
      }
    }

    img {
      margin-top: 0.6rem;
      justify-self: center;
      height: auto;
      max-height: calc(var(--profile-pic-size) * 0.8);
      border-radius: 100%;
      border: 2px solid var(--color-bg-blue);
      //object-fit: contain;
    }

    span {
      justify-self: center;
      text-align: center;
      font-family: var(--inter);
      font-weight: var(--bold);
      font-size: var(--font-user-profile-info);
      color: var(--color-span-user-profile-info);
      align-self: end;
    }
  }

  div:nth-child(1) {
    margin-top: 6rem;
  }

  div:nth-child(3) {
    margin-top: 6rem;
  }
`;
