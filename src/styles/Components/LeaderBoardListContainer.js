import styled from "styled-components";

export const LeaderBoardListContainer = styled.section`
  display: grid;
  gap: var(--main-spacing);
  grid-template-columns: max-content 1fr;
  justify-items: end;
  width: 100%;
  margin-top: 2rem;

  span {
    padding: 1rem;
    font-family: var(--inter);
    font-weight: var(--bold);
    font-size: var(--font-leaderboard-list-numbers);
    color: var(--color-span-leaderboard-list-numbers);
  }

  a:nth-child() {
    background-color: var(--color-green-1);
    width: 100%;
    img {
      border: 4px solid var(--color-green-1);
    }

    div {
      p {
        color: var(--color-green-2);

        ::after {
          background: linear-gradient(90deg, transparent, var(--color-green-1));
        }
      }
    }
  }

  a {
    width: calc(100% - 2rem);
    display: grid;
    gap: 0.5rem;
    grid-template-columns: max-content 1fr;

    background-color: var(--color-gray-3);
    border-radius: 3rem;
    height: max-content;
    //padding: 1rem;

    img {
      border: 4px solid var(--color-gray-3);
      border-radius: 100%;
      height: 3.8rem;
      width: 3.8rem;
      object-fit: cover;
    }

    div {
      display: grid;
      gap: 0;
      grid-template-columns: 1fr;
      background-color: var(--transparent) !important;
      align-self: center;
      padding-right: 1.2rem;

      p {
        height: var(--font-leaderboard-list-nome);
        color: var(--color-gray-1);
        overflow: hidden;
        white-space: nowrap;
        line-height: var(--font-leaderboard-list-nome);
        font-family: var(--readex-pro);
        font-weight: var(--medium);
        font-size: var(--font-leaderboard-list-nome);
        margin-bottom: 0.2rem;
        position: relative;

        ::after {
          content: "";

          position: absolute;
          bottom: 0;
          right: 0;
          height: var(--font-leaderboard-list-nome);
          width: 15%;
          background: linear-gradient(90deg, transparent, var(--color-gray-3));
        }
      }

      span {
        color: var(--color-black);
        font-family: var(--inter);
        font-weight: var(--bold);
        font-size: var(--font-leaderboard-list-score);
        padding: 0;
      }
    }
  }
`;
