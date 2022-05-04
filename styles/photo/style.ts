import styled, { css } from "styled-components";

export const BodySTY = styled.div`
  margin: 20px;
`;

export const MainSTY = styled.div`
  .homeTitle {
    display: flex;

    .sideTitle {
      margin-left: 11rem;
    }
  }

  @media screen and (max-width: 768px) {
    .sideTitle {
      display: none;
    }
  }
`;
