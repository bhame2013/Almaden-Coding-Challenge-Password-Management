import styled from "styled-components";

export const Header = styled.div`
  padding-top: 20px;
  width: 290px;
  min-height: 100vh;
  background-color: #3c4a54;
  display: none;

  ul {
    li {
      list-style: unset !important;

      a {
        padding: 0 25px;
        height: 40px;
        display: flex;
        align-items: center;
        color: #88959e;
        gap: 20px;
        font-weight: 600;

        i {
          height: 25px;
          width: 25px;

          svg {
            height: inherit;
            width: auto;
            fill: currentColor;
          }
        }
      }

      a:hover {
        background-color: #36424b;
      }

      a.active {
        background-color: #22303a;
        color: #fff;

        i {
          svg {
            fill: #fff;
          }
        }
      }
    }
  }


  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
