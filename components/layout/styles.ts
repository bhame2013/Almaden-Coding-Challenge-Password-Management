import styled from "styled-components";

export const Layout = styled.div`
  display: flex;

  .content {
    width: 100%;

    section {
      min-height: calc(100vh - 60px);
      width: 100%;
    }

    .container {
      padding: 25px 30px;
      position: relative;
    }
  }

  @media only screen and (min-width: 992px) {
    .content {
      width: calc(100% - 290px);
    }
  }
`;
