import styled from "styled-components";

export const FormAddNewPassword = styled.div`
  background-color: #f2f4f5;
  padding: 20px;

  .error-message {
    margin-bottom: 20px;
  }

  .double-column {
    display: flex;
    gap: 15px;
    width: 100%;

    > div {
      width: 100%;
    }
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;

    button {
      height: 30px;
      min-width: 180px;
      border: 0;
      font-size: 15px;
      font-weight: 600;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .button-cancel {
    background-color: #ccc;
  }

  .button-submit {
    color: #fff;
    background-color: var(--primary-color);
  }
`;
