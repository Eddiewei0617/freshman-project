import styled, { css } from "styled-components";

export const BodySTY = styled.div`
  background-color: #dddddd;
  margin-top: 16px;
  > div {
    .bigImg {
      width: 1240px;
      height: 500px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .firstarea {
    display: flex;
    padding: 20px;
    .firstImg {
      margin-top: 20px;
      width: 3200px;
      height: 600px;
      margin-right: 16px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      padding: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .bigImg {
      width: 100%;
      height: 100%;
    }
    .firstarea {
      display: block;
      margin-top: 16px;
      .firstImg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
