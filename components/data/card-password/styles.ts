import styled from "styled-components";

export const PasswordCard = styled.div`
  border-radius: 2px;
  box-shadow: 0 1px 3px RGBA(0, 24, 48, 0.2);
  display: inline-block;
  background-color: #fff;
  position: relative;
  vertical-align: top;
  width: 270px;

  .image {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    position: relative;

    .default {
      border-radius: 100%;
      height: 55px;
      width: 55px;
      background-color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px RGBA(0, 24, 48, 0.2);

      span {
        height: 15px;
        width: 15px;
        background-color: rgba(77, 94, 110, 1);
      }
    }

    .image--hover-container {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      background-color: rgba(77, 94, 110, 0.4);
      align-items: center;
      justify-content: center;

      a {
        height: 44px;
        width: 192px;
        border: 1px solid #dfe2e6;
        border-radius: 4px;
        color: #fff;
        background-color: rgba(77, 94, 110, 0.9);
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: unset;

        &:hover {
          background-color: rgba(77, 94, 110, 1);
        }
      }
    }
  }

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    min-height: 44px;
    
    .title-text {
      display: flex;
      width: 100%;
      flex-direction: column;
    }

    .name-password {
      font-weight: 700;
      font-size: 14px;
    }

   .name-user-password {
      font-size: 12px;
      font-weight: 400;
    }

    .name-password,
    .name-user-password {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 10px;

      button {
        border: 1px solid #dfe2e7;
        height: 24px;
        width: 24px;
        border-radius: 2px;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          height: 14px;
          width: auto;
          fill: rgba(77, 94, 110, 1);
        }
      }

      button:hover {
        background-color: rgba(60, 74, 84, 0.2);
      }
    }
  }

  &:hover {
    .image {
      .image--hover-container {
        display: flex;
      }
    }

    .text {
      .title-text {
        width: 60%;
      }

      .actions {
        display: flex;
      }
    }
  }
`;
