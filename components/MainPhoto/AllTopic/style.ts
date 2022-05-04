import styled, { css } from "styled-components";

export const AlltopicSTY = styled.div`
  margin: 16px;
  > div {
    h3 {
      font-weight: 700;
    }
  }

  .allTopicCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .topicCard {
      width: 340px;
      transition: 0.2s;
      padding: 10px;
      margin: 0 4px;

      a {
        > div {
          Image {
            object-fit: cover;
          }
        }
      }

      &:hover {
        box-shadow: 0px 3px 5px grey;
        transform: scale(1.01);
        border-radius: 8px;
      }

      div {
        margin: 6px 0;
      }
    }

    .active {
      display: none;
    }
  }

  .moreButton {
    display: flex;
    justify-content: center;
    margin: 20px auto;
    color: ${({ theme }) => theme.XinMedia.DullCyan};
    button {
      border: 2px solid ${({ theme }) => theme.XinMedia.DullCyan};
      padding: 8px 60px;
      &:hover {
        background-color: ${({ theme }) => theme.XinMedia.DullCyan};
        color: white;
      }
    }
  }
`;
