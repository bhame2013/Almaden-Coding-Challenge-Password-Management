import styled from "styled-components"

export const Input = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: 600;
    margin-bottom: 5px;
    display: block;
  }

  input {
    font-size: 16px;
    height: 30px;
    padding: 0 5px 0 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #a7afba;
    width: 100%;
    color: #000;
    background-color: #fff;
  }

  .input-content.password {
    .eye {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      background-color: transparent;
      cursor: pointer;
      border: 0;
      display: flex;
      padding: 0;

      svg {
        height: 20px;
        width: auto;
      }
    }
  }

  .input-content {
    position: relative;

    .options {
      display: none;
      position: absolute;
      top: 30px;
      left: 0;
      width: 100%;
      background-color: #fff;
      max-height: 95px;
      overflow: auto;
      z-index: 10;
      border: 1px solid #ccc;

      button {
        width: 100%;
        background-color: #f1f1f1;
        color: rgba(0, 0, 0, 0.01);
        text-align: left;
        color: #000;
        border: 0;
        padding: 6px 10px;

        &:hover {
          background-color: #e4e4e4;
        }
      }
    }

    .options::-webkit-scrollbar {
      width: 7px;
    }

    .options::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .options::-webkit-scrollbar-thumb {
      background: var(--primary-color);
    }

    .options::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color-hover);
    }

    .options:focus {
      display: block;
    }

    input:focus + .options {
      display: block;
    }

    .options:hover {
      display: block;
    }
  }
`
