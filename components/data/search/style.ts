import styled from "styled-components";

export const Search = styled.div`
  width: 60%;
  display: flex;
  gap: 20px;
  height: 46px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  position: relative;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    margin: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;

    svg {
      height: 15px;
      width: auto;
      fill: #fff;
    }
  }

  input {
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
    background-color: unset;
    font-weight: 400;
    padding: 0 40px;
  }

  input::placeholder {
    color: rgba(255,255,255,0.6);
  }

  input:focus, input:focus-visible {
    background-color: #fff;
    color: #000;
  }

  input:focus + label, input:focus-visible + label {
    svg {
      fill: #000;
    }
  }
`;
