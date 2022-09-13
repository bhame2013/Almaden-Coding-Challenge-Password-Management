import styled from "styled-components"

export const ChangePasswordFolder = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      height: 10px !important;
    }

    .sub-menu {
      display: none;
      position: absolute;
      top: 0;
      left: 100%;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px RGBA(0, 24, 48, 0.2);
    }

    &:hover {
      .sub-menu {
        display: block;
      }
    }
  }
`
