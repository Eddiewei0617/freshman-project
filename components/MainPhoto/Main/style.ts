import styled, { css } from "styled-components";

export const MainSTY = styled.div`
  .homeTitle {
    display: flex;

    .sideTitle {
      margin-left: 11rem;
    }
  }

  .infoWidth {
    width: 920px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    > div {
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 768px) {
    .sideTitle {
      display: none;
    }
    .infoWidth {
      display: block;
    }
  }
`;

export const ArticleSTY = styled.div`
  margin: 60px;
  > .title {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 40px;
      font-weight: 600;
    }
    p {
      font-size: 40px;
      font-weight: 600;
      border-top: 5px solid ${({ theme }) => theme.XinMedia.DullCyan};
      width: 30px;
      text-align: center;
      color: ${({ theme }) => theme.XinMedia.Downy};
    }
  }

  .content {
    > p {
      a {
        color: ${({ theme }) => theme.XinMedia.DullCyan};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .tag {
    display: flex;
    p {
      margin: 10px;
      padding: 5px 10px;
      text-align: center;
      border: 2px solid grey;
      border-radius: 20px;
      font-size: 14px;
      &:hover {
        color: ${({ theme }) => theme.XinMedia.DullCyan};
        border: 2px solid ${({ theme }) => theme.XinMedia.DullCyan};
        cursor: pointer;
      }
    }
  }

  .recommend {
    > div {
      display: flex;
      flex-wrap: wrap;

      > a {
        display: flex;
        width: 50%;
        margin: 10px auto;
        .curImage {
          width: 180px;
          height: 155px;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        > div {
          width: 50%;
          margin-left: 10px;
          p {
            font-weight: 600;
          }
          .date {
            color: ${({ theme }) => theme.XinMedia.DullCyan};
          }
        }
      }
    }
  }
`;
