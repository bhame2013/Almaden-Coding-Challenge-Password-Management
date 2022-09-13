import styled from "styled-components";

export const ContextMenuComponent = styled.div`
  position: relative;
  z-index: 99;

  nav {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px RGBA(0, 24, 48, 0.2);
    min-width: 150px;

    hr {
      border-width: 1px 0 0 0;
      border-style: solid;
      border-color: #d5d5d575;
      margin: 0;
    }

    button,
    a, span {
      display: flex;
      gap: 10px;
      align-content: center;
      border: 0;
      background-color: transparent;
      font-size: 12px;
      padding: 5px 15px;
      width: 100%;
      cursor: pointer;
      color: #000;
      text-decoration: unset;

      svg,
      img {
        height: 13px;
        width: auto;
      }

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
`;
